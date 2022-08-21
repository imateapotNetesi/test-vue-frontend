<template>
  <div class="main-content">
    <breadcumb :page="'Aziende'" :folder="'Home'"/>

    <div class="ul-todo-list-content ">
      <div class="ul-todo-sidebar" >
        <b-card body-class="p-2" class="h-100"> 
          <i
            class="todo-sidebar-close i-Close pb-3 float-right"
            @click="isOpenMobileMenu = !isOpenMobileMenu"
          ></i>
          <b-button style="font-size:120%"
                v-b-modal.modal-1 block 
                variant="primary"
                class="w-100 justify-content-center align-items-center d-flex flex-column"
               
                >  <i style="font-size:200%" class="i-Add mb-2"></i> Aggiungi Azienda</b-button>
               
          <b-modal id="modal-1" centered title="Add Task" hide-footer>
            <b-form @submit.prevent="todoFormSubmit('primary')">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="text"
                  v-model="todoForm.name"
                  placeholder="task name...."
                ></b-form-input>
              </b-form-group>
              
              <b-form-group>
                <b-form-input 
                    id="input-1" 
                    type="date"
                    v-model="todoForm.date"
                >
              </b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-textarea
                  id="textarea"
                  v-model="todoForm.description"
                  placeholder="Description..."
                  rows="3"
                ></b-form-textarea>
              </b-form-group>
              <b-form-group>
                <vue-tags-input
                  v-model="tag"
                  class="border text-15"
                  :autocomplete-items="filteredItems"
                  :tags="todoForm.autocompleteTag"
                  @tags-changed="
                    newTags => (todoForm.autocompleteTag = newTags)
                  "
                  placeholder="Type Developer Category"
                />
                
              </b-form-group>
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-select :value="null" id="input-3" :options="foods">
                  <template v-slot:first>
                    <option :value="null">Select Developer/Designer...</option>
                  </template>
                </b-form-select>
              </b-form-group>

              <b-button type="submit" variant="outline-primary">Submit</b-button>
              <b-button type="reset" variant="outline-danger">Reset</b-button>
            </b-form>
          </b-modal>

     
        </b-card>
      </div>
      <p class="ul-todo-content-right">
        <b-card class="wrapper">
          <i
            class="nav-icon i-Align-Justify-All text-25 ul-contact-mobile-icon mr-2"
            @click="isOpenMobileMenu = !isOpenMobileMenu"
          ></i>
          <vue-good-table
            :columns="columns"
            :search-options="{
              enabled: true,
              placeholder: 'Search this table'
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records'
            }"
            styleClass="tableOne vgt-table"
            :rows="rows"
          >
          
           <template slot="table-row" slot-scope="props">
           
              <span >
                <div class="ul-todo-area d-flex flex-column">
                             <img height="150" class="logo cover block" src="@/assets/images/symbol2.png" alt="" />

                  <div>{{ props.row.name }}</div>
                </div>
              </span>
           
              <span>

                    <a class="dropdown-item"  @click="editTodo(props.row)" 
                      v-b-modal.contact-list-table-modal-2>
                      <i class="nav-icon i-Pen-2 text-success font-weight-bold mr-2"></i>Edit
                      </a>
                    <a class="dropdown-item" @click="deleteTodo(props.index)">
                      <i class="nav-icon i-Close-Window text-danger font-weight-bold mr-2"></i>Delete
                    </a>
              </span>
            
            </template>
          </vue-good-table>
        </b-card>
        <!-- edit-modal  -->
        <div class="edit-modal">
          <b-modal 
                ref="my-modal"
                id="contact-list-table-modal-2" 
                centered title="BootstrapVue"
                hide-footer>
            <b-form @submit.prevent="onUpdateTodoList">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="text"
                  v-model="editTodoList.name"
                  placeholder="task name...."
                ></b-form-input>
              </b-form-group>
              <b-form-group></b-form-group>
              <b-form-group>
                <b-form-textarea
                  id="textarea"
                  placeholder="Description..."
                  v-model="editTodoList.description"
                  rows="3"
                ></b-form-textarea>
              </b-form-group>
              <b-form-group>
                <b-form-input 
                    id="input-1" 
                    type="date"
                    v-model="editTodoList.date"
                >
              </b-form-input>
              </b-form-group>
              <b-form-group>
                <vue-tags-input
                  class="border text-15"
                  v-model="editedTag"
                  :autocomplete-items="filteredItems"
                  :tags="editTodoList.tags"
                  @tags-changed="
                    newTags => (editTodoList.tags = newTags)
                  "
                  placeholder="Type Developer Category"
                />
              </b-form-group>
                
             
              <!-- end::edit-modal -->

              <b-button type="submit"  variant="outline-primary">Submit</b-button>
              <b-button type="reset" variant="outline-danger">Reset</b-button>
            </b-form>
          </b-modal>
        </div>
      </div>
    </div>  
</template>
<style>

thead {
  display: none; 
}

tbody {
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
  grid-gap: 1rem;
}

.vgt-inner-wrap {
 box-shadow: none;
}

.vgt-global-search.vgt-clearfix {
  margin-bottom: 1rem;
}


table.vgt-table td {
  border:none;
  border:1px solid  #D1D5DB; 
  display: flex;
  flex-direction: column;
  text-align: center;
}

td span:nth-child(2) {
  display: flex;
}

.card-body {
  padding: 1rem ;
}


@media only screen and (max-width: 395px) {
tbody {
  grid-template-columns: repeat(auto-fill,minmax(100%, 1fr));
}
input.vgt-input.vgt-pull-left {
  width: 100%;
}
}

</style>

<script>
import tagInputVue from "../form/tagInput.vue";
export default {
  data() {
    return {
      isBadge: true,
      isOpenMobileMenu: false,
      editTodoList: "",
      // tagInput
      tag: "",
      editedTag:"",
      tags: [],
      autocompleteTags: [
        {
          text: "Vue"
        }
      ],
      autocompleteItems: [
        {
          text: "Vue",
          badgeColor: "badge-success",
          img: require("@/assets/images/faces/1.jpg")
        },
        {
          text: "Angular",
          badgeColor: "badge-danger",
          img: require("@/assets/images/faces/2.jpg")
        },
        {
          text: "React",
          badgeColor: "badge-info",
          img: require("@/assets/images/faces/3.jpg")
        },
        {
          text: "Jquery",
          badgeColor: "badge-danger",
          img: require("@/assets/images/faces/4.jpg")
        },
        {
          text: "JS",
          badgeColor: "badge-warning",
          img: require("@/assets/images/faces/5.jpg")
        }
      ],
      // tagInput
      todoForm: [
        {
          name: "",
          description: "",
          autocompleteTag: "",
          date: new Date()
        }
      ],
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      columns: [
        {
     
          field: "name"
        }
                  
      ],
   
      rows: [ 
        {
          id: 1,
          name:
            "Wireless Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date:"2019-10-18",
          tags: [
            {
              text: "Vue",
              badgeColor: "badge-success",
              img: require("@/assets/images/faces/1.jpg"),
            },
            {
              text: "React",
              badgeColor: "badge-info",
              img: require("@/assets/images/faces/3.jpg"),
            }
          ]
        },
        {
          id: 2,
          name: "Bluetooth Headphone",
          name:
            "Bluetooth V4.0 Portable Speaker with HD Sound and Bass",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date:"2019-10-18",
          tags: [
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg")
            },
            {
              text: "JS",
              badgeColor: "badge-warning",
              img: require("@/assets/images/faces/5.jpg")
            }
          ]
        },
        {
          id: 3,
          name: "Bluetooth Headphone",
          name:
            "Monitor V4.0 Portable Speaker with HD Sound and Bass",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date:"2019-10-18",
          tags: [
            {
              text: "Angular",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/2.jpg")
            },
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg")
            }
          ]
        },
        {
          id: 4,
          name: "Bluetooth Headphone",
          name:
            "Monitor V4.0 Portable Speaker with HD Sound and Bass",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date:"2019-10-18",
          tags: [
            {
              text: "Angular",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/2.jpg")
            },
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg")
            }
          ]
        },
        {
          id: 5,
          name: "Bluetooth Headphone",
          name:
            "Monitor V4.0 Portable Speaker with HD Sound and Bass",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date:"2019-10-18",
          tags: [
            {
              text: "Angular",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/2.jpg")
            },
            {
              text: "Jquery",
              badgeColor: "badge-danger",
              img: require("@/assets/images/faces/4.jpg")
            }
          ]
        }
 
      ]
    };
  },
  methods: {
    profileAction(data) {
      return data;
    },
    todoFormSubmit(variant = null) {
      let inputName = this.todoForm.name;
      let description = this.todoForm.description;
      let inputTag = this.todoForm.autocompleteTag;
      let date = this.todoForm.date;
      
      this.rows.push({
        id: this.rows.length+1,
        name: inputName,
        tags: inputTag,
        description: description,
        date:date
      });
      
     
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        type: 'success',
        title: 'Data Inserted Successfully'
      })
      
    },
    deleteTodo(data) {
      console.log(data);
      
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$delete(this.rows, data)
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
      
    },
    editTodo(data){
      this.editTodoList = data
      
    },
    onUpdateTodoList(){
      
      let modifiedList = this.rows.map(row => {
          
          this.$refs['my-modal'].hide()
          this.$swal({
            position: "top-end",
            type: "warning",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1000
          });
          
        if (row.id == this.editTodoList.id) {
          
          return this.editTodoList
          
        }
        else{
          return row
        }
      });
      this.rows = modifiedList;
      
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    }
  }
};
</script>


