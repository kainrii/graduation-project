export const calculateAge  = (dob) => {
    // Tạo một đối tượng Date từ chuỗi ngày sinh
    const dobDate = new Date(dob);
    // Lấy ngày hiện tại
    const now = new Date();
  
    // Tính toán sự khác biệt giữa năm hiện tại và năm sinh
    let age = now.getFullYear() - dobDate.getFullYear();
  
    // Kiểm tra xem tháng và ngày trong năm hiện tại đã vượt qua ngày sinh chưa
    const monthDiff = now.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dobDate.getDate())) {
      age--;
    }
  
    return age;
  }