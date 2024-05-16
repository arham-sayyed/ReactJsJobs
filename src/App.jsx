// external imports
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

// importing components/pages/layouts
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from './pages/EditJobPage'
import NotFoundPage from "./pages/NotFoundPage";

// app
const App = () => {
  // add job
  const addJob = async (data) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    return;
  };

  const updateJob = async (data) => {
    const res = await fetch(`/api/jobs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    return;
  };


  // delete job
  const deleteJob = async (jobId) => {
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: "DELETE",
    });
    console.log(res);
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      // layout wrapper
      <Route path="/" element={<MainLayout />}>
        {/* page routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobData={addJob} />} />

        <Route
          path="/job/:id"
          element={<JobPage deleteJobData={deleteJob} />}
          loader={jobLoader}
        />

        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobData={updateJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
