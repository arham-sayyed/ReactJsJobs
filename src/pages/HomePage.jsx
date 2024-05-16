
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Card from '../components/Card'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
    
      <Hero title="ReactJs Developer Jobs " subTitle="React Is Awsome ⚡" />

      <HomeCards>
        <Card
          title="For Developers"
          description="Browse our Reacts jobs and start your career today"
          buttonText="Browse Jobs"
          toLink="/jobs"
        />
        <Card
          title="For Employers"
          description="List your job to find the perfect devloper for the role"
          buttonText="Add Job"
          cardStyles="bg-indigo-100 p-6 rounded-lg shadow-md"
          buttonStyles="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          toLink="/add-job"
        />
      </HomeCards>
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
