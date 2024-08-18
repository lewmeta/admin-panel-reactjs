import ChartBox from "../../components/chart-box/chart-box";
import TopBox from "../../components/top-box/top-box";
import {
    // barChartBoxRevenue,
    // barChartBoxVisit,
    // chartBoxConversion,
    chartBoxProduct,
    // chartBoxRevenue,
    chartBoxUser,
} from "../../data";

import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
        </div>
    )
}

export default Home;