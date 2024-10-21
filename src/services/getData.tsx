import axios, { AxiosResponse, AxiosError } from "axios";

const getData = async (url: string) => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error: unknown) {
    console.error("error: ", error);
    if (error instanceof AxiosError) {
      console.error("Request failed with status:", error.response?.status);
      console.error("Response data:", error.response?.data);
    }
    alert("خطای ناگهانی رخ داده است");
    return undefined;
  }
};

export default getData;
