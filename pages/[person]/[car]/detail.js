import { useRouter } from "next/router";

const DetailPage = () => {
    const query = useRouter().query;
    return (
        <div>
            <h1>Detail</h1>
            <hr />
            <p>This is {query.person}'s {query.car}</p>
        </div>
    )
}

export default DetailPage;