// FILE: src/pages/WorkPage.jsx
// ... other imports ...
import AnimatedSection from '../components/AnimatedSection';
import WorkItemCard from '../components/WorkItemCard';
import { mockWorkItems } from '../data/workData'; 

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-12">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black tracking-tight">
          My Work
        </h2>
      </AnimatedSection>
      {/* The grid container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockWorkItems.map((item, index) => (
          // CRITICAL: AnimatedSection (the grid item) must be h-full
          <AnimatedSection key={item.id} delay={index * 100} className="h-full"> 
            <WorkItemCard item={item} />
          </AnimatedSection>
        ))}
      </div>
      {/* ... rest of the page ... */}
    </div>
  );
};
export default WorkPage;