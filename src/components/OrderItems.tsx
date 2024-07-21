import { Naira } from "./icons";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface MenuProps {
  openModal: Dispatch<SetStateAction<boolean>>;
}

interface Item {
  id: number;
  name: string;
  price: string;
}

const OrderItems: FC<MenuProps> = ({ openModal }) => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const friedBushmeat = [
    { id: 1, name: "Oya (Grasscutter)", price: "3,000 per plate" },
    { id: 2, name: "full oya", price: "30,000 - 40,000" },
    { id: 3, name: "Anta (alligator)", price: "3,000 per plate" },
    { id: 4, name: "full anta", price: "20,000 - 25,000" },
    { id: 5, name: "oni (crocodile)", price: "5,000 - 10,000" },
    { id: 6, name: "full crocodile", price: "12,000 - 15,000" },
    { id: 7, name: "awo (guinea fowl)", price: "3,000 per plate" },
    { id: 8, name: "full guineafowl", price: "6,000 - 10,000" },
    { id: 9, name: "etu (antelope)", price: "3,000 per plate" },
    { id: 10, name: "full antelope", price: "35,000 - 40,000" },
    { id: 11, name: "full ologede (civet)", price: "45,000 - 60,000" },
    { id: 12, name: "ejo (snake)", price: "3,000 per plate" },
    { id: 13, name: "python ejo (snake)", price: "25,000 - 40,000" },
    { id: 14, name: "sebe (cobra)", price: "15,000 - 20,000" },
    { id: 15, name: "full igala (deer)", price: "5,000 - 120,000" },
    { id: 16, name: "peppered snail (igbin)", price: "3,500 per plate" },
    { id: 17, name: "peppered beed", price: "2,000 per plate" },
    { id: 18, name: "peppered ponmo", price: "1,000 per plate" },
    { id: 19, name: "peppered soup assorted", price: "1,500 per plate" },
    { id: 20, name: "peppered borkotor", price: "1,500 per plate" },
    { id: 21, name: "peppered soup", price: "2,000 per plate" },
  ];

  const roastedDishes = [
    { id: 1, name: "Roasted yam, titus fish and plantain", price: "8,000" },
    { id: 2, name: "roasted yam, cat fish and plantain", price: "6,000" },
    {
      id: 3,
      name: "roasted yam, titus fish with two plantain, ponmo",
      price: "8,000",
    },
    {
      id: 4,
      name: "roasted bushmeat, roasted yam, titus fish and plantain",
      price: "10,000",
    },
    { id: 5, name: "roasted croaker fish, plantain, yam", price: "12,000" },
  ];

  const others = [
    { id: 1, name: "rice", price: "1,500" },
    { id: 2, name: "plantain", price: "1,000" },
    { id: 3, name: "fried yam", price: "2,000" },
    { id: 4, name: "rice", price: "250 - 500" },
  ];

  const palmwine = [
    { id: 1, name: "palmwine full liter", price: "1,000" },
    { id: 2, name: "takeaway bottle", price: "300" },
    { id: 3, name: "full 5 liters", price: "5,000" },
    { id: 4, name: "full 10 liters", price: "1,500" },
  ];

  const handleItemSelection = (item: Item, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
    }
  };

  const handleOrderNow = () => {
    const orderMessage = selectedItems.map(item => `${item.name} - ${item.price}`).join(', ');
    const message = encodeURIComponent(`New Order details: ${orderMessage}`);
    const phoneNumber = '2348148175713';
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
  };
  return (
    <div className="mt-[15vh] mx-auto w-[90vw]">
      <h2 className="lg:text-[48px] text-[#8c3a00] text-[32px] font-monoton mb-10">
        Menu
      </h2>
      <div className="mt-10 flex justify-between space-x-10">
        <div className="w-[35%]">
          <h2 className="text-[24px] uppercase font-bold">Fried & Peppered Bushmeat</h2>
          <div className="space-y-3 mt-4">
            {friedBushmeat.map(item => (
              <div key={item.id} className="flex justify-between uppercase items-center w-[100%]">
                <h3>{item.name}</h3>
                <div className="flex items-center space-x-8">
                  <p className="flex items-center space-x-1">
                    <Naira /> <span className="mt-1">{item.price}</span>
                  </p>
                  <input
                    type="checkbox"
                    className="scale-150"
                    onChange={(e) => handleItemSelection(item, e.target.checked)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[55%] space-y-8">
          <div>
            <h2 className="text-[24px] uppercase font-bold">Roasted Dishes</h2>
            <div className="space-y-3 mt-4">
              {roastedDishes.map(item => (
                <div key={item.id} className="flex justify-between uppercase items-center w-[100%]">
                  <h3>{item.name}</h3>
                  <div className="flex items-center space-x-8">
                    <p className="flex items-center space-x-1">
                      <Naira /> <span className="mt-1">{item.price}</span>
                    </p>
                    <input
                      type="checkbox"
                      className="scale-150"
                      onChange={(e) => handleItemSelection(item, e.target.checked)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b-2 border-[#e05d00]"></div>

          <div>
            <h2 className="text-[24px] uppercase font-bold">Other Dishes</h2>
            <div className="space-y-3 mt-4">
              {others.map(item => (
                <div key={item.id} className="flex justify-between uppercase items-center w-[100%]">
                  <h3>{item.name}</h3>
                  <div className="flex items-center space-x-8">
                    <p className="flex items-center space-x-1">
                      <Naira /> <span className="mt-1">{item.price}</span>
                    </p>
                    <input
                      type="checkbox"
                      className="scale-150"
                      onChange={(e) => handleItemSelection(item, e.target.checked)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b-2 border-[#e05d00]"></div>

          <div>
            <h2 className="text-[24px] uppercase font-bold">Palmwine</h2>
            <div className="space-y-3 mt-4">
              {palmwine.map(item => (
                <div key={item.id} className="flex justify-between uppercase items-center w-[100%]">
                  <h3>{item.name}</h3>
                  <div className="flex items-center space-x-8">
                    <p className="flex items-center space-x-1">
                      <Naira /> <span className="mt-1">{item.price}</span>
                    </p>
                    <input
                      type="checkbox"
                      className="scale-150"
                      onChange={(e) => handleItemSelection(item, e.target.checked)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-x-10 mb-20 lg:mb-0 pt-10 lg:text-[16px] text-[13px] flex items-center justify-end">
            <button
              onClick={handleOrderNow}
              className="bg-[#e05d00] py-2 px-4 rounded-lg"
            >
              Place Order
            </button>
            <button
              onClick={() => openModal(false)}
              className="bg-[#e05d00] py-2 px-4 rounded-lg"
            >
              Close menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
