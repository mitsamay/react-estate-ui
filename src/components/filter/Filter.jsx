import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        ຂໍ້ມູນທີ່ຕ້ອງການຄົ້ນຫາ <b>ນະຄອນຫຼວງວຽງຈັນ</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">ທີ່ຕັ້ງ: </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="ນະຄອນຫຼວງ/ແຂວງ"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">ປະເພດການ: </label>
          <select name="type" id="type">
            <option value="any">ທັງໝົດ</option>
            <option value="buy">ຂາຍ</option>
            <option value="rent">ໃຫ້ເຊົ່າ</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">ປະເພດຊັບສິນ: </label>
          <select name="property" id="property">
            <option value="any">ທັງໝົດ</option>
            <option value="apartment">ອາພາດເມັນ</option>
            <option value="condo">ຄອນໂດມິນຽມ</option>
            <option value="house">ເຮືອນ</option>
            <option value="land">ທີ່ດິນ</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">ລາຄາຕໍ່າສຸດ: </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="ທັງໝົດ"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">ລາຄາສູງສຸດ: </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="ທັງໝົດ"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">ຫ້ອງນອນ: </label>
          <input type="text" id="bedroom" name="bedroom" placeholder="ທັງໝົດ" />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
