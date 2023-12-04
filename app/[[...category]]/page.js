import HomeContainer from "@/containers/home";

import Movies from "@/server/movies.json"

const delay = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}


const Home = async ({ params }) => {
    await delay(3000)
    let selectedCategory;
    if (params.category?.length > 0) selectedCategory = true;
    let count = Math.floor(Math.random())
    return (
        <main>
            <HomeContainer selectedCategory={{
                id: params.category?.[0] ?? "",
                movies: selectedCategory ? Movies.results.slice(count, count += 4) : []
            }} />
        </main>
    )
}

export default Home