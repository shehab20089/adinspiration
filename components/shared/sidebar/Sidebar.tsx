import { sidebarItems } from "./data";

export const Sidebar = () => {
  return (
    <div className="bg-[#F9FAFB] w-[230px] border-[#E7EAEE] border-e p-8">
      {sidebarItems.map((item) => (
        <div key={item.group} className="mb-8">
          <h3 className="text-xl font-bold text-[#323A46] mb-4">
            {item.group}
          </h3>
          <div className="flex flex-col gap-5">
            {item.items.map((subItem) => (
              <button
                key={subItem.key}
                className="text-left  font-medium rounded-md hover:bg-gray-100 text-lg text-[#4B5768]"
              >
                {subItem.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
