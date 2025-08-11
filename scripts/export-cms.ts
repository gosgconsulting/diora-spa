/*
  CLI: Export the CMS boilerplate to a target directory.
  Usage examples:
    npm run cms:export                 # exports to ./cms-boilerplate
    npm run cms:export -- --out ../my-cms-template
*/
import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'

function getArg(name: string, fallback: string) {
  const idx = process.argv.indexOf(`--${name}`)
  if (idx >= 0 && process.argv[idx + 1]) return process.argv[idx + 1]
  return fallback
}

async function ensureDir(p: string) { await fs.mkdir(p, { recursive: true }) }

async function copyRecursive(from: string, to: string) {
  await ensureDir(path.dirname(to))
  // Node 20 supports fs.cp
  // @ts-ignore
  await fs.cp(from, to, { recursive: true })
}

async function run() {
  const out = path.resolve(getArg('out', './cms-boilerplate'))
  const projectRoot = process.cwd()

  const items = [
    { src: 'src/cms', dest: 'src/cms' },
    { src: 'docs/cms-blueprint.md', dest: 'docs/cms-blueprint.md' },
    { src: 'scripts/scaffold-cms.ts', dest: 'scripts/scaffold-cms.ts' },
    { src: '.env.example', dest: '.env.example' },
  ]

  for (const item of items) {
    const from = path.resolve(projectRoot, item.src)
    const to = path.resolve(out, item.dest)
    const exists = await fs.stat(from).then(() => true).catch(() => false)
    if (!exists) continue
    await ensureDir(path.dirname(to))
    await copyRecursive(from, to)
  }

  // Minimal README for the exported boilerplate
  const readme = `# CMS Boilerplate\n\nThis folder contains a content-only CMS for fixed-layout React apps.\n\n- See docs/cms-blueprint.md for setup and integration steps.\n- Copy src/cms into your project and wire routes as described.\n`;
  await ensureDir(path.join(out))
  await fs.writeFile(path.join(out, 'README.md'), readme, 'utf-8')

  // Adjust .env.example to include a randomized VITE_CMS_CLIENT_ID
  try {
    const envPath = path.join(out, '.env.example')
    const exists = await fs.stat(envPath).then(()=>true).catch(()=>false)
    const randWord = crypto.randomUUID().split('-')[0]
    const randToken = crypto.randomBytes(24).toString('base64url')
    if (exists) {
      let text = await fs.readFile(envPath, 'utf-8')
      text = text.replace(/^VITE_CMS_CLIENT_ID=.*$/m, `VITE_CMS_CLIENT_ID=${randWord}`)
      if (!/^VITE_CMS_CLIENT_ID=/m.test(text)) text += `\nVITE_CMS_CLIENT_ID=${randWord}`
      text = text.replace(/^VITE_CMS_TOKEN=.*$/m, `VITE_CMS_TOKEN=${randToken}`)
      if (!/^VITE_CMS_TOKEN=/m.test(text)) text += `\nVITE_CMS_TOKEN=${randToken}`
      await fs.writeFile(envPath, text, 'utf-8')
    } else {
      const text = [
        'VITE_SUPABASE_URL=',
        'VITE_SUPABASE_ANON_KEY=',
        `VITE_CMS_TOKEN=${randToken}`,
        `VITE_CMS_CLIENT_ID=${randWord}`,
        ''
      ].join('\n')
      await fs.writeFile(envPath, text, 'utf-8')
    }
  } catch {}

  console.log(`Exported CMS boilerplate to: ${out}`)
}

run().catch(err => { console.error(err); process.exit(1) })


