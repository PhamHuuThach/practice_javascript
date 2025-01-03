export const addMember = () => `
<div class="add-member">
    <div class="add-member__form" id="form-test">
        <div class="add-member__form__input">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Nguyễn Văn C" />
        </div>
        <div class="add-member__form__input">
            <label for="office">Office</label>
            <input type="text" id="office" name="office" placeholder="Phòng Kỹ Thuật" />
        </div>
        <div class="add-member__form__input">
            <label for="position">Position</label>
            <input type="text" id="position" name="position" placeholder="Nhân Viên" />
        </div>
        <div class="add-member__form__input">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="nguyenvanc@gmail" />
        </div>
        <div class="add-member__form__button">
            <button id="save-member" type="submit">Save</button>
        </div>
    </div>
</div>`;
