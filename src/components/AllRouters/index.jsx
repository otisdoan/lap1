import { router } from "./routers";
import { useRoutes } from "react-router-dom";
function AllRouters() {
    const element = useRoutes(router);
    return (
        <>
            {element};
        </>
    )
}
export default AllRouters;