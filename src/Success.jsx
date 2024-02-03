

const Success = ({success,onClose}) => {
  return (
    <div className="fixed w-full top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-90 z-10">
      <div className="md:w-[320px] w-[200px] md:h-[120px] h-[100px] rounded-lg  bg-green-500 text-white ">
        <div className="flex justify-end p-2">
          <button onClick={onClose}>
            <p>X</p>
          </button>
        </div>
        <div className="flex justify-center items-center  font-bold md:text-[20px] text-[12px] ">
          <div className="text-center font-bold">
            <p>{success}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success