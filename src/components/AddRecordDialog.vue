<!-- template for the modal component -->
<template>
    <div id="add-record" v-if="showModal === false">
        <button type="button" v-on:click="openModal">{{addRecordText}}</button>
    </div>
    <transition name="modal" v-else>
        <div class="modal-mask">
            <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                <slot name="header">
                    <h4>{{addRecordText}}</h4>
                </slot>
                </div>
                <div class="modal-body">
                <slot name="body">
                    <div id="user-form">
                        <div id="form-item">
                            <label for="name">Name</label>
                            <input id="name" type="text" v-model="formData.name"/>
                        </div>
                        <div id="form-item">
                            <label for="email">Email</label>
                            <input id="email" type="text" v-model="formData.email"/>
                        </div>
                        <div id="form-item">
                            <label for="location">Location</label>
                            <input id="location" type="text" v-model="formData.location"/>
                        </div>
                        <div id="form-item">
                            <label for="age">Age</label>
                            <input id="age" type="number" v-model="formData.age"/>
                        </div>
                    </div>
                </slot>
                </div>
                <div class="modal-footer">
                <slot name="footer">
                    <div id="actions">
                        <button type="button" v-on:click="closeModal">{{buttonLabels.close}}</button>
                        <button type="button" v-on:click="clearFormData">{{buttonLabels.clear}}</button>
                        <button type="button" v-on:click="submitUserRecord">{{buttonLabels.submit}}</button>
                    </div>
                </slot>
                </div>
            </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "AddRecordDialog",
    data: () => ({
        showModal: false,
        addRecordText: "Add User Record",
        formData: {
            age: 0,
            name: '',
            email: '',
            location: ''
        },
        buttonLabels: {
            submit: "Create",
            clear: "Clear",
            close: "Close"
        }
    }),
    methods: {
        openModal() {
            this.showModal = true
        },
        closeModal() {
            this.showModal = false
        },
        submitUserRecord() {
            const records = JSON.parse(localStorage.getItem('records'))
            const updatedRecords = [...records, { ...this.formData, id: Math.floor(Math.random() * 999999) }]
            localStorage.setItem('records', JSON.stringify(updatedRecords))
            this.showModal = false
            window.location.reload()
        },
        clearFormData() {
            this.formData = { name: '', age: 0, location: '', email: '' }
        }
    }
}
</script>

<style scoped>
#close {
    top: 10px;
    right: 10px;
    position: absolute;
}
#add-record {
    width: 95%;
    display: flex;
    margin: 10px auto;
    justify-content: flex-end;
}
#form-item {
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
}
#actions {
    display: flex;
    justify-content: flex-end;
}
#actions > button:first-child {
    margin-right: 10px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>