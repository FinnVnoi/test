// Ds.js
document.addEventListener("DOMContentLoaded", function () {
    // Gọi API từ server
    fetch("https://finnvnoi.azdigi.shop/lilnhan/danhsach")
      .then((response) => response.json())
      .then((data) => {
        const container = document.body; // Hoặc chọn một element container cụ thể
        data.forEach((item) => {
          // Tạo phần tử div.card
          const cardDiv = document.createElement("div");
          cardDiv.className = "card";
  
          // Tạo div.imgcard và thêm ảnh
          const imgCardDiv = document.createElement("div");
          imgCardDiv.className = "imgcard";
          const imgElement = document.createElement("img");
          imgElement.src = item.HINHANH;
          imgElement.alt = item.TEN;
  
          imgCardDiv.appendChild(imgElement);
  
          // Tạo h1 cho tên
          const h1Element = document.createElement("h1");
          h1Element.textContent = item.TEN;
  
          // Tạo h3 cho tổ
          const h3Element = document.createElement("h3");
          h3Element.textContent = `Tổ ${item.TO}`;
  
          // Gắn các thành phần vào cardDiv
          cardDiv.appendChild(imgCardDiv);
          cardDiv.appendChild(h1Element);
          cardDiv.appendChild(h3Element);
  
          // Thêm cardDiv vào container
          container.appendChild(cardDiv);
        });
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu từ server:", error);
      });
  });
  