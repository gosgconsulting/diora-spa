# DIORA SPA + PAYLOADCMS INTEGRATION - PROJECT BACKLOG

## 📋 PROJECT OVERVIEW
**Goal:** Connect Lovable website with PayloadCMS for dynamic content management
**Approach:** API-based integration maintaining existing deployment pipeline
**Status:** 🟡 In Progress

---

## 🎯 HIGH-LEVEL SCOPES

### **PHASE 1: LOVABLE WEBSITE RESTRUCTURING**
**Scope:** Break down existing pages into reusable, clean component architecture
**Priority:** 🔴 Critical
**Status:** ⏳ Pending

### **PHASE 2: PAYLOADCMS SCHEMA DESIGN**
**Scope:** Create Collections, Blocks, Globals, and Pages structure in PayloadCMS
**Priority:** 🔴 Critical  
**Status:** ⏳ Pending

### **PHASE 3: API INTEGRATION**
**Scope:** Connect Lovable components with PayloadCMS via REST API
**Priority:** 🔴 Critical
**Status:** ⏳ Pending

### **PHASE 4: TESTING & OPTIMIZATION**
**Scope:** Ensure functionality, performance, and deployment
**Priority:** 🟡 Important
**Status:** ⏳ Pending

---

## 📝 DETAILED IMPLEMENTATION CHECKLIST

### **PHASE 1: LOVABLE WEBSITE RESTRUCTURING**

#### **1.1 Project Setup & Organization**
- [x] Create backlog tracking system
- [x] Set up component architecture folders (`src/data/` created)
- [x] Document current content structure

#### **1.2 Extract Data Entities**
- [x] Create `src/data/services.ts` from Homepage hardcoded data
- [x] Create `src/data/teamMembers.ts` from Homepage hardcoded data  
- [x] Create `src/data/testimonials.ts` from Homepage hardcoded data
- [x] Create `src/data/features.ts` from Homepage hardcoded data
- [x] Create `src/data/ingredients.ts` from Homepage hardcoded data
- [x] Create `src/data/index.ts` for easy importing
- [x] Update Homepage.tsx to import extracted data

#### **1.3 Create Section Components**
- [x] Create `src/components/sections/HeroSection.tsx`
- [ ] Create `src/components/sections/ServicesSection.tsx`
- [ ] Create `src/components/sections/FeaturesSection.tsx`  
- [ ] Create `src/components/sections/IngredientsSection.tsx`
- [ ] Create `src/components/sections/TeamSection.tsx`
- [ ] Create `src/components/sections/AboutSection.tsx`
- [ ] Create `src/components/sections/TestimonialsSection.tsx`

#### **1.4 Refactor Pages to Use Sections**
- [ ] Refactor `Homepage.tsx` to use section components
- [ ] Refactor `Pricing.tsx` to use section components  
- [x] Test that all pages render correctly
- [x] Ensure no visual regressions

#### **1.5 Global Components Enhancement**
- [ ] Extract Header navigation to data structure
- [ ] Extract Footer content to data structure
- [ ] Make Header/Footer truly reusable across pages

---

### **PHASE 2: PAYLOADCMS SCHEMA DESIGN**

#### **2.1 Collections Design**
- [x] Design Services collection schema
- [x] Design TeamMembers collection schema
- [x] Design Testimonials collection schema
- [x] Design Features collection schema
- [x] Design Ingredients collection schema
- [ ] Implement Collections in PayloadCMS admin (USER ACTION REQUIRED)

#### **2.2 Blocks Design**
- [ ] Design HeroBlock schema
- [ ] Design ServicesBlock schema  
- [ ] Design FeaturesBlock schema
- [ ] Design TeamBlock schema
- [ ] Design AboutBlock schema
- [ ] Design TestimonialsBlock schema
- [ ] Implement Blocks in PayloadCMS admin

#### **2.3 Globals Design**
- [ ] Design Header global schema
- [ ] Design Footer global schema
- [ ] Design Site Settings global schema
- [ ] Implement Globals in PayloadCMS admin

#### **2.4 Pages Structure**
- [ ] Design Pages collection with flexible blocks
- [ ] Set up Homepage page in PayloadCMS
- [ ] Set up Pricing page in PayloadCMS
- [ ] Test page composition in PayloadCMS admin

#### **2.5 Content Migration**
- [ ] Migrate existing services data to PayloadCMS
- [ ] Migrate existing team members to PayloadCMS
- [ ] Migrate existing testimonials to PayloadCMS
- [ ] Upload and organize media assets
- [ ] Set up Homepage content using blocks

---

### **PHASE 3: API INTEGRATION**

#### **3.1 API Client Setup**
- [x] Install and configure API dependencies
- [x] Create PayloadCMS API service layer
- [x] Set up environment variables for API URLs
- [x] Create TypeScript types from PayloadCMS schema

#### **3.2 Data Fetching Implementation**
- [x] Create React Query hooks for Collections
- [x] Create React Query hooks for Globals  
- [x] Create React Query hooks for Pages
- [x] Implement error handling and loading states

#### **3.3 Component Integration**
- [x] Update HeroSection to fetch from PayloadCMS
- [x] Update ServicesSection to fetch from PayloadCMS
- [x] Update FeaturesSection to fetch from PayloadCMS
- [ ] Update TeamSection to fetch from PayloadCMS
- [ ] Update AboutSection to fetch from PayloadCMS
- [ ] Update TestimonialsSection to fetch from PayloadCMS

#### **3.4 Global Components Integration**
- [ ] Update Header to fetch navigation from PayloadCMS
- [ ] Update Footer to fetch content from PayloadCMS
- [ ] Implement dynamic routing for pages

#### **3.5 Page Composition**
- [ ] Implement dynamic page rendering from PayloadCMS blocks
- [ ] Update Homepage to render from PayloadCMS data
- [ ] Update Pricing page to render from PayloadCMS data
- [ ] Test page composition functionality

---

### **PHASE 4: TESTING & OPTIMIZATION**

#### **4.1 Functionality Testing**
- [ ] Test all pages render correctly with PayloadCMS data
- [ ] Test content updates reflect on frontend
- [ ] Test image optimization and loading
- [ ] Test responsive design on all devices

#### **4.2 Performance Optimization**
- [ ] Implement proper caching strategies
- [ ] Optimize image loading and sizes
- [ ] Test page load speeds
- [ ] Implement SEO metadata from PayloadCMS

#### **4.3 Content Management Testing**
- [ ] Test content editing workflow in PayloadCMS
- [ ] Test block reordering and composition
- [ ] Test media upload and management
- [ ] Create content management documentation

#### **4.4 Deployment & Documentation**
- [ ] Test deployment pipeline with PayloadCMS integration
- [ ] Update environment variables for production
- [ ] Create user documentation for content management
- [ ] Create developer documentation for future updates

---

## 🔄 PROGRESS TRACKING

### **Weekly Milestones**
- **Week 1:** Complete Phase 1 (Lovable Restructuring)
- **Week 2:** Complete Phase 2 (PayloadCMS Schema)  
- **Week 3:** Complete Phase 3 (API Integration)
- **Week 4:** Complete Phase 4 (Testing & Deployment)

### **Current Status:** 
- **Active Phase:** Phase 2 - PayloadCMS Schema Design  
- **Next Milestone:** USER ACTION: Configure Collections in PayloadCMS admin
- **Completed:** Full API integration architecture, section components, schema design
- **Blockers:** Need access to PayloadCMS admin panel to configure collections

---

## 📋 NOTES & DECISIONS

### **Technical Decisions Made:**
1. ✅ Use REST API integration (not database direct access)
2. ✅ Maintain existing Lovable deployment pipeline  
3. ✅ Use React Query for data fetching and caching
4. ✅ Implement TypeScript types from PayloadCMS schema

### **Future Considerations:**
- Consider GraphQL if REST API proves insufficient
- Plan for content versioning and previews
- Consider implementing search functionality
- Plan for multi-language support if needed

---

## 🚀 SUCCESS CRITERIA

**Phase 1 Success:**
- [ ] All pages use clean, reusable section components
- [ ] No visual regressions from original design
- [ ] Code is well-organized and maintainable

**Phase 2 Success:**
- [ ] PayloadCMS admin allows flexible page composition
- [ ] Content editors can manage all website content easily
- [ ] All content types are properly structured

**Phase 3 Success:**
- [ ] Website dynamically renders content from PayloadCMS
- [ ] Content updates appear immediately on frontend
- [ ] Performance is comparable to static version

**Phase 4 Success:**
- [ ] Full content management workflow is tested and documented
- [ ] Website maintains all existing functionality
- [ ] Deployment pipeline works seamlessly with new architecture

---

**Last Updated:** $(date)
**Next Review:** Weekly during development