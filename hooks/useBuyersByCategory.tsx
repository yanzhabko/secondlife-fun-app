import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Buyers } from "@/components/buyers/Table/Column";
import { getBuyersByCategory } from "@/app/action/buyers/get-buyers-by-category";
import toast from "react-hot-toast";
import { formatTime } from "@/lib/formatDate";

const useBuyersByCategory = () => {
  const pathname = usePathname();
  const [data, setData] = useState<Buyers[] | undefined>(undefined);
  const [time, setTime] = useState({
    update: "",
    latest: "",
  });
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getBuyersByCategory(
          pathname.replace("/buyers/", "")
        );
        setData(result.buyers);
        setTime({
          update: formatTime(result.time.updated),
          latest: result.time.latest ? formatTime(result.time.latest) : "N/A",
        });
      } catch (err: any) {
        toast.error("Сталася помилка!", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pathname]);

  return { data, isLoading, time };
};

export default useBuyersByCategory;
