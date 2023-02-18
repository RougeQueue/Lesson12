<script>

import {  getStorage, ref, uploadBytes } from "firebase/storage";

    const fileUpload = (e) => {
        const file = e.target.files[0];
        const StorageRef = ref(storage , "img/" +file.name);
        uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        });
    }


</script>


<template>
  <div>
      <form>
          <input
            type="file"
            accept=" .png,  .jpeg,  .jpg,  .bmp,  .gif"
            @change="fileUpload"
          />
          <button
            type="submit"
            class="button"
            >投稿
          </button>
      </form>
      
      <!-- <div class="form-name">
                <p>画像名入力</p>
                <input type="text" name="name" placeholder="画像名を入力してください" v-model="name">
      </div>
      <div class="form-day">
                <p>日付入力</p>
                <input type="date" name="day" placeholder="日付を入力してください" v-model="day">
      </div>
      <div class="form-memo">
                <p>コメント入力</p>
                <textarea type="text" name="message" placeholder="画像へのコメントを入力してください" v-model="message"></textarea>
      </div> -->
      <!-- <button type="submit" @click="post">投稿</button> -->
  </div>
</template>

<style scoped>
    label {
        font-size: 12px;
        padding: 2px 3px;
        border: 1px solid #c6c6c6;
    }
    label:hover {
        cursor: pointer;
        background-color: #cbdada;
    }
    label input {
        display: none;
    }
    #file_name {
        font-size: 14px;
        margin-left: 20px;
    }
   
</style>
