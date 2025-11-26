interface SchemaItem {
  key: string;
  type: string;
  name?: string;
  role?: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

interface TeamMemberCardProps {
  member: SchemaItem;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <div key={index} className="p-6 text-center">
      <div className="mb-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-square object-cover rounded-lg shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="font-garet text-lg font-semibold mb-2" style={{ color: '#3a2c1b' }}>{member.name}</h3>
      <p className="font-garet text-sm text-muted-foreground mb-2" style={{ color: '#3a2c1b' }}>{member.role}</p>
      <p className="font-garet text-xs" style={{ color: '#3a2c1b' }}>{member.description}</p>
    </div>
  );
}
