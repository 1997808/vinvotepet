/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { population } from "components/constant";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

interface Voting {
  province: string;
  president: string;
}

const onSubmit = (data: FieldValues) => {
  const votingData = data as Voting;
  localStorage.setItem('votingData', JSON.stringify(votingData));
  console.log(votingData);
};

function VotingForm() {
  const { register, handleSubmit: onHandleSubmit, formState: { errors } } = useForm();
  console.log(errors, '======== err')

  return (
    <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
      <h5 className="text-2xl font-semibold tracking-tight text-gray-900">Lựa chọn của bạn</h5>
      <p className="text-xs font-normal text-gray-500 mb-4">Thông tin chi tiết kết quả sẽ hiển thị thêm sau khi bạn bỏ phiếu</p>

      <form onSubmit={onHandleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-4">
        <div className="w-full">
          <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900">Chọn địa điểm bỏ phiếu</label>
          <select id="province" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" {...register("province")}>
            {population.sort((a, b) => a.name.localeCompare(b.name)).map((item) => (
              <option key={item.code} value={item.iso}>{item.name}</option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="president" className="block mb-2 text-sm font-medium text-gray-900">Lựa chọn</label>
          <div className="flex items-center ps-4 border border-gray-200 rounded mb-2">
            <input id="bordered-radio-1" type="radio" value="Cat" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" {...register("president")} />
            <label htmlFor="bordered-radio-1" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Cat</label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded">
            <input id="bordered-radio-2" type="radio" value="Dog" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500" {...register("president")} />
            <label htmlFor="bordered-radio-2" className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Dog</label>
          </div>
        </div>
        <button type="submit" className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Gửi</button>
      </form>
    </div>

  );
}

export default VotingForm