import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            ລະບົບຖານຂໍ້ມູນ ທຸລະກິດທີ່ດິນ ຄອນໂດມິນຽມ ອາພາດເມັນ ແລະ ຫ້ອງຊຸດ
          </h1>
          <p>
            ສ້າງຄວາມເຂັ້ມແຂງ ເພື່ອການພັດທະນາ ແລະ
            ສ້າງຄວາມເຊື່ອໝັ້ນຊັດທາໃນການຄຸ້ມຄອງບໍລິຫານຂອງພາກລັດ ສູ່ປະຊາຊົນ
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>18</h1>
              <h2>ບໍລິສັດດຳເນີນທຸລະກິດທີ່ດິນ</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>ອາຄານໃຫ້ບໍລິການ</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>ຫ້ອງຊຸດໃຫ້ບໍລິການ</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
