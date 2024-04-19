import React from "react";
import { MdOutlineAddChart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-teal-600 text-white py-3  px-4">
      <div className="text-2xl font-bold">ÜRÜN TAKİP UYGULAMASI</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg"
            name=""
            id=""
          >
            <option value="asc">ARTAN FİYAT</option>
            <option value="desc">AZALAN FİYAT</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 rounded-lg px-4 text-black"
            type="text"
            placeholder="Arama Yapınız..."
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-teal-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-950"
        >
          <MdOutlineAddChart size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
