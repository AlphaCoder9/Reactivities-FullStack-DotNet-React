import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../feature/activities/home/HomePage";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import ActivityDetailPage from "../../feature/activities/dashboard/details/ActivityDetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "activities",
                element: <ActivityDashboard />
            },
             {
                path: "activities/:id",
                element: <ActivityDetailPage />
            },
            {
                path: "create-activity",
                element: <ActivityForm key="create" />
            },
            {
                path: "manage/:id",
                element: <ActivityForm />
            }
        ]
    }
]);

