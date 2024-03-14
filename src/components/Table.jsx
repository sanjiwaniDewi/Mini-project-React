import { Link } from "react-router-dom";
import "../style/components.css";

const Table = ({ data }) => {
    let header = [
        ...new Set(
            data
                .map((item) => Object.keys(item))
                .join(",")
                .split(",")
        ),
    ].map((item) => (item === "id" ? "No" : item));

    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, indexs) => (
                        <tr
                            key={indexs}
                            className={
                                indexs % 2 === 0
                                    ? "table-row row-even"
                                    : "table-row row-odd"
                            }
                        >
                            {header.map((head, index) => {
                                if (index === 1) {
                                    return (
                                        <td key={index}>
                                            <Link
                                                to={`leader-detail/${item["id"]}`}
                                            >
                                                {item[head]}
                                            </Link>{" "}
                                        </td>
                                    );
                                } else if (head === "No") {
                                    if (typeof item["id"] === "number") {
                                        return (
                                            <td key={index}>{item["id"]}</td>
                                        );
                                    } else {
                                        return (
                                            <td key={index}>{indexs + 1}</td>
                                        );
                                    }
                                } else if (head === "members") {
                                    let members = item[head]
                                        .map((a) => a.membername)
                                        .join(", ");
                                    return <td key={index}>{members}</td>;
                                } else {
                                    return <td key={index}>{item[head]}</td>;
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
