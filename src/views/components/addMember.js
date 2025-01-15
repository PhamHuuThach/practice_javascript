export const addMember = () => `
<div class="add-member">
    <div class="add-member__form" id="form-test">
        <div class="add-member__form__input">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Nguyễn Văn C" />
            <span id="name-error"></span>
        </div>
        <div class="add-member__form__input">
            <label for="office">Office</label>
            <input type="text" id="office" name="office" placeholder="Phòng Kỹ Thuật" />
            <span id="office-error"></span>
        </div>
        <div class="add-member__form__input">
            <label for="position">Position</label>
            <input type="text" id="position" name="position" placeholder="Nhân Viên" />
            <span id="position-error"></span>
        </div>
        <div class="add-member__form__input">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="nguyenvanc@gmail" />
            <span id="email-error"></span>
        </div>
        <div class="add-member__form__button">
            <button id="save-member" class="save-member" type="submit">Save</button>
            <button id="update-member" class="update-member" type="submit">Update</button>
        </div>
    </div>
</div>`;
