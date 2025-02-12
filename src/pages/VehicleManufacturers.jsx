import { useQuery } from '@tanstack/react-query';

const VehicleManufacturers = () => {
  const { isPending, error, data: vehicles } = useQuery({
    queryKey: ['vehiclesData'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/manufacturers');
      return response.json()
    }
  })

  if (isPending) return <div>Fetching data ...</div>

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Vehicle Manufacturers</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Brand Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Company Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Year Founded</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Founder</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Current CEO</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Estimated Worth (USD)</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => {
            return (
              <tr key={vehicle._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{vehicle.brand_name}</td>
                <td className="border border-gray-300 px-4 py-2">{vehicle.company_name}</td>
                <td className="border border-gray-300 px-4 py-2">{vehicle.year_founded}</td>
                <td className="border border-gray-300 px-4 py-2">{vehicle.founder}</td>
                <td className="border border-gray-300 px-4 py-2">{vehicle.current_ceo}</td>
                <td className="border border-gray-300 px-4 py-2">{vehicle.estimated_worth}</td>
                <td className="border border-gray-300 px-4 py-2 text-center space-x-1">
                  <button className="bg-green-500 text-white px-2 py-1 text-sm rounded hover:bg-green-600">Details</button>
                  <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded hover:bg-blue-600">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );


};
export default VehicleManufacturers;