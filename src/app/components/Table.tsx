"use client";



type Reservation = {
  id: number;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
};

export default function Table({
  data,
  handleDelete,
}: {
  data: Reservation[];
  handleDelete: (id: number) => void;
}) {
  return (
    <div className="min-h-screen  p-8">
      

      <table className="w-full border text-white border-gray-700">
        <thead>
          <tr className="bg-zinc-800">
            <th className="p-3">نام</th>
            <th className="p-3">شماره</th>
            <th className="p-3">خدمات</th>
            <th className="p-3">تاریخ</th>
            <th className="p-3">ساعت</th>
            <th className="p-3">عملیات</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center text-black border-t border-gray-700">
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.phone}</td>
              <td className="p-3">{item.service}</td>
              <td className="p-3">{item.date}</td>
              <td className="p-3">{item.time}</td>
              <td className="p-3">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-400"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}