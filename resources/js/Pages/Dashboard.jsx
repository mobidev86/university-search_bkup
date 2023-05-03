import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios, * as others from "axios";
import { useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import { useMemo, useEffect } from "react";
import { debounce } from "lodash";
import { Navbar } from "react-bootstrap";
import "./../../css/custom.css";
// import { Container } from "postcss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Dashboard = ({ auth, accessToken }) => {
    const [isLoad, setIsLoad] = useState(false);
    const [isUniSelected, setIsUniSelected] = useState(false);
    const [noDataFound, setNoDataFound] = useState(false);

    const timer = null;

    const [arrData, setArrData] = useState([]);
    const [selectedText, setSelectedText] = useState({});

    const [searchQuery, setSearchQuery] = useState("");
    const ref = useRef(null);

    const searchInApi = async (event) => {
        try {
            setArrData([]);
            setIsUniSelected(false);
            setNoDataFound(false);
            if (event.target.value.length >= 3) {
                setIsLoad(true);

                let getData = await axios.get(
                    `http://127.0.0.1/api/search-universities?q=${event.target.value}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                setArrData(getData.data.universities);
                if (getData.data.universities.length == 0) {
                    setNoDataFound(true);
                }
                setIsLoad(false);
            } else {
                return true;
            }

            //hit api from here
        } catch (error) {}
    };

    const selectedUniversity = async (index) => {
        setIsUniSelected(true);
        setSelectedText(arrData[index]);
        setArrData([]);
        ref.current.value = "";
        // setSelectedText(event.target.value);
    };

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    const debouncedResults = useMemo(() => {
        return debounce(searchInApi, 500);
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Search University
                </h2>
            }
            footer={
                <h2 className="font-semibold text-sm text-white leading-tight">
                    © 2023 , All rights reserved.
                </h2>
            }
        >
            <Head title="Dashboard" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                <div className="w-full relative mb-4">
                    <input
                        ref={ref}
                        type="text"
                        placeholder="Search.."
                        name="search"
                        onChange={debouncedResults}
                        className="w-full rounded-md border-gray-300 pr-8"
                        autoComplete="off"
                        autoFocus="true"
                        key="inputSearch"
                    />
                    <svg
                        className="absolute right-4 -translate-y-1/2 top-1/2"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_111_179)">
                            <path
                                d="M8.28424 11.1687C11.0556 9.99087 12.3475 6.78942 11.1697 4.01804C9.99185 1.24665 6.7904 -0.0451964 4.01901 1.13261C1.24763 2.31042 -0.0442194 5.51188 1.13359 8.28326C2.3114 11.0546 5.51286 12.3465 8.28424 11.1687Z"
                                stroke="#C4CCD4"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M10 10L14 14"
                                stroke="#C4CCD4"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_111_179">
                                <rect width="15" height="15" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="flex flex-wrap justify-center">
                    {arrData.length > 0 &&
                        arrData.map((data, index) => (
                            <div className="w-full lg:w-1/3 ">
                                <Card
                                    className="bg-white hover:bg-gray-200 cursor-pointer shadow-md rounded-md p-4 m-3"
                                    key={index}
                                >
                                    <Card.Body
                                        onClick={() => {
                                            selectedUniversity(index);
                                        }}
                                    >
                                        <Card.Title
                                            style={{ textAlign: "center" }}
                                        >
                                            {data.name}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    {noDataFound && (
                        <Card
                            className="bg-white hover:bg-gray-200 cursor-pointer shadow-md rounded-md p-4 m-3"
                            key="noDataFound"
                        >
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center" }}>
                                    No Data Found!
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    )}
                </div>
                {isUniSelected && (
                    <div>
                        <Card className="bg-white shadow-md rounded-md p-4 m-3">
                            <Card.Body>
                                <Card.Text className="mb-2 text-muted">
                                    <strong className="pr-2 uppercase">
                                        Name :{" "}
                                    </strong>
                                    {selectedText.name}
                                </Card.Text>
                                <Card.Text className="mb-2 text-muted">
                                    <strong className="pr-2 uppercase">
                                        Web Pages :
                                    </strong>{" "}
                                    {selectedText.web_pages}
                                </Card.Text>
                                <Card.Text className="mb-2 text-muted">
                                    <strong className="pr-2 uppercase">
                                        Country :{" "}
                                    </strong>
                                    {selectedText.country}
                                </Card.Text>
                                <Card.Text className="mb-2 text-muted">
                                    <strong className="pr-2 uppercase">
                                        Domain :
                                    </strong>{" "}
                                    {selectedText.domains}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )}
                {isLoad && (
                    <div className="pos-center">
                        <div className="loader"></div>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
