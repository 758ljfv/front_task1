<template>

  <div class="b-main" v-bind:class="{'black-window': showFilter}">
    <a style="margin-bottom: 40px" class="btn-custom" v-on:click="openModal" href="javascript:void 0">Фильтр</a>

    <modalWindow v-bind:id="'modal1'" v-on:close-modal="closeModal" v-if="showFilter === true">
      <h3>Фильтр</h3>
      <input v-model="search" class="b-main__search" placeholder="Введите имя или дату">
      <filter-list v-for="item in searchData"
                   v-bind:key="item.id"
                   v-bind:id="item.id"
                   v-bind:name="item.name"
                   v-bind:dob="item.date"
      >
      </filter-list>
    </modalWindow>


    <list-items v-for="item in paginatedData"
                v-bind:key="item.id"
                v-bind:id="item.id"
                v-bind:name="item.name"
                v-bind:dob="item.date">

    </list-items>
    <paginate :page-number="pageNumber" :page-count="resultCount" v-on:prevPage="prevPage" v-on:nextPage="nextPage"></paginate>
    <a style="margin-bottom: 40px" class="btn-custom" href="#modal2">Фильтр</a>

    <modal-window v-bind:id="'modal2'" v-on:close-modal="closeModal" v-if="showFilter === true">
      <form v-on:submit.prevent="addNewUser">
        <input v-model="newUserName" id="new-user" placeholder="Имя юзера">
        <input type="date" v-model="newUserDate" id="new-date" placeholder="Дата рождения">
        <button>Добавить</button>
      </form>
    </modal-window>
  </div>
</template>

<script>
function randomDate(start, end) {
  return new Date(start.getTime()
      + Math.random() * (end.getTime() - start.getTime()));
}
var arr = [];
var maxId;
for (let i = 1; i<=100; i++){
  var randDate = randomDate(new Date(1980, 0, 1), new Date());
  var contact = {
    id : i,
    name: 'name-' + i,
    date: (randDate.toDateString()),
  }
  console.log(contact)
  maxId = i + 1;
  arr.push(contact);
}

import listItems from './components/list-items.vue'
import filterList from './components/filter-list.vue'
import modalWindow from './components/modalWindow.vue'
import paginate from './components/paginate.vue'


export default {
  name: 'App',
  props:{
    listData:{
      type:Array,
      required:true
    },
    size:{
      type:Number,
      required: false,
      default: 10
    }
  },
  data: function (){
    return{
      arr,
      search: '',
      newUser: {},
      pageNumber: 0,
      showFilter: false,
      resultPageCount: 0,
      newUserName: '',
      newUserDate: '',
      maxId
    }
  },
  computed:{
    searchData: function (){
      let search = this.search;
      if (search.length >= 3) {
        return this.arr.filter(function(arr) {
          return Object.keys(arr).some(function(key) {
            return String(arr[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.arr
    },
    pageCount: function (){
      var resultCount = this.resultPageCount;
      let i = this.listData.length,
          s = this.size;
      resultCount = Math.ceil(i/s)
      return resultCount;
    },
    paginatedData: function (){
      const start = this.pageNumber * this.size,
          end = start + this.size;
      return this.arr.slice(start, end)
    }
  },
  methods:{
    openModal: function (){
      this.showFilter = true

    },
    closeModal: function (){
      this.showFilter = false
      console.log('Клик')
    },
    nextPage: function (){
      this.pageNumber++;
    },
    prevPage: function (){
      this.pageNumber--;
    },
    addNewUser: function (){
      this.arr.push({
        id: this.maxId++,
        name: this.newUserName,
        date: this.newUserDate
      })
      this.newUserName = ''
    }
  },
  components: {
    listItems,
    filterList,
    modalWindow,
    paginate
  },

}

</script>

<style>
@import "assets/style.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
