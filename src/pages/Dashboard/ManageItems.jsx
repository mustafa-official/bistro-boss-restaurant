import { FaEdit } from "react-icons/fa";
import SectionHeading from "../../components/SectionHeading";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( async (result) => {
      if (result.isConfirmed) {
        // console.log(id);

        const res = await axiosSecure.delete(`/remove-menu/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been delete",
            icon: "success",
          });
        }
      }
    });
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <SectionHeading
        heading={"Manage All Items"}
        subheading={"What's new?"}
      ></SectionHeading>
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200  md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <div className="flex items-center gap-x-3">
                      <span>Image</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <div className="flex items-center gap-x-3">
                      <span>Item Name</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <span>Price</span>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    <button className="flex items-center gap-x-2">
                      <span>Update</span>
                    </button>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
                {menu.map((item) => (
                  <tr key={item._id}>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      <div className="avatar">
                        <div className="w-14 rounded">
                          <img
                            src={item.image}
                            alt="Tailwind-CSS-Avatar-component"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      {item.name}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      ${item.price}
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      <button>
                        <FaEdit className="text-[18px]"></FaEdit>
                      </button>
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
