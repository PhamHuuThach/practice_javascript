export const Table = (users) => {
  return `<div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th class="table__th">User</th>
            <th class="table__th">Văn Phòng Làm Việc</th>
            <th class="table__th">Chức Vụ</th>
            <th class="table__th">Email</th>
          </tr>
        </thead>
        <tbody id="table__tbody">
         ${users
           .map(
             (user) => `
        <tr>
          <td>${user.name}</td>
          <td>${user.office}</td>
          <td>${user.position}</td>
          <td>${user.email}</td>
        </tr>
      `
           )
           .join("")}
    </tbody>
      </table>
    </div>
    `;
};
