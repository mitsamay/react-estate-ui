import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>ຖານຂໍ້ມູນທຸລະກິດທີ່ດິນ</span>
        </a>
        <a href="/">ທຸລະກິດທີ່ດິນ</a>
        <a href="/">ຄອນໂດມິນຽມ</a>
        <a href="/">ອາພາດເມັນ</a>
        <a href="/">ຫ້ອງຊຸດ</a>
      </div>
      <div className="right">
        <a href="/">ເຂົ້າສູ່ລະບົບ</a>
        <a href="/" className="register">
          ລົງທະບຽນ
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">ທຸລະກິດທີ່ດິນ</a>
          <a href="/">ຄອນໂດມິນຽມ</a>
          <a href="/">ອາພາດເມັນ</a>
          <a href="/">ຫ້ອງຊຸດ</a>
          <a href="/">ເຂົ້າສູ່ລະບົບ</a>
          <a href="/">ລົງທະບຽນ</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
