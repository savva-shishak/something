<template>
    <q-page class="flex flex-center">
        <q-card style="width: 100%; max-width: 600px">

            <!-- Заголовок -->
            <q-card-section class="text-center text-grey">
                <p class="text-h4">Регистрация</p>
                <span>Уже волонтёр?
                <router-link tag="span" to="/login">
                  <span class="text-light-blue-6" style="cursor: pointer"> Войдите <i class="fas fa-key"></i></span>
                </router-link>
                </span>
            </q-card-section>
            <!-- /Заголовок -->

            <q-separator/>

            <!-- Имя -->
            <q-card-section>
                <q-input v-model="name" standout="text-white bg-light-blue-6" label="Ваше имя" hint="Например: Петя" />
            </q-card-section>
            <!-- /Имя -->

            <q-separator/>

            <!-- Фамилия -->
            <q-card-section>
                <q-input v-model="surname" standout="text-white bg-light-blue-6" label="Фамилия" />
            </q-card-section>
            <!-- /Фамилия -->

            <q-separator/>

            <!-- Отчество -->
            <q-card-section>
                <q-input v-model="patronymic" standout="text-white bg-light-blue-6" label="Отчество" hint="если есть" />
            </q-card-section>
            <!-- /Отчество -->

            <q-separator/>

            <!-- Пол -->
            <q-card-section>
                <q-radio v-model="sex" color="light-blue-6" :val="true" label="Мужчина" />
                <q-radio v-model="sex" color="light-blue-6" :val="false" label="Женщина" />
            </q-card-section>
            <!-- /Пол -->

            <q-separator/>

            <!-- Телефон -->
            <q-card-section>
                <q-input v-model="phone" type="number" label="Ваш телефон" mask="#(###) ### - ## - ##" fill-mask standout="text-white bg-light-blue-6" />
            </q-card-section>
            <!-- /Телефон -->

            <q-separator/>

            <!-- Фото -->
            <q-card-section>
                <input type="file" ref="file" class="hidden" @change="loadAvatar" accept="image/*" />
                <q-img v-show="imgSrc != null" spinner-color="red" :src="imgSrc"/>
                <q-btn-group>
                    <q-btn 
                        @click="fileClick" 
                        color="light-blue-6" 
                        class="full-width" 
                        :label="btnText"
                        no-caps
                    />
                    <q-btn 
                        v-show="imgSrc != null" 
                        @click="deleteSrc" 
                        color="light-blue-6" 
                        class="full-width" 
                        label="Убрать"
                        no-caps
                    />
                </q-btn-group>
            </q-card-section>
            <!-- /Фото -->

            <q-separator/>

            <!-- Город -->
            <q-card-section>
                <q-input label="Ваш город: " standout="text-white bg-light-blue-6" v-model="city" />
            </q-card-section>
            <!-- /Город -->

            <q-separator/>

            <!-- Описание -->
            <q-card-section>
                <q-input outlined color="light-blue-6" type="textarea" v-model="descript" label="Расскажите о себе" />
            </q-card-section>
            <!-- /Описание -->

            <q-separator/>

            <!-- Логин -->
            <q-card-section>
                <q-input label="Придумайте уникальный логин" standout="text-white bg-light-blue-6" v-model="login" />
            </q-card-section>
            <!-- /Логин -->

            <q-separator/>

            <!-- Пароль -->
            <q-card-section>
                <q-input label="Придумайте пароль" standout="text-white bg-light-blue-6" v-model="password" />
            </q-card-section>
            <!-- /Пароль -->

            <q-separator/>

            <!-- Повтор -->
            <q-card-section>
                <q-input label="Повторите пароль" standout="text-white bg-light-blue-6" v-model="password2" />
            </q-card-section>
            <!-- /Повтор -->

            <q-separator/>

            <!-- Отправка -->
            <q-card-section>
                <q-btn 
                    @click="addvolunteer({
                        name, 
                        surname, 
                        patronymic,
                        sex,
                        descript,
                        imgSrc,
                        login,
                        password
                        })"
                    color="light-blue-6" 
                    class="full-width" 
                    label="Зарегистрироваться" 
                    no-caps/>
            </q-card-section>
            <!-- /Отправка -->
        </q-card>
    </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default{
  /**
   * Значения переменных:
   * sex - пол
   * name, surname, patronymic - Ф.И.О.
   * phone - для номера телефона
   * descript - описание
   * city - город
   * login, password, password2 - логин и пароль
   * imgSrc - атрибут src картинки для выбора аватарки
   */
  data(){
    return {
      sex: null,
      name: null,
      surname: null,
      patronymic: null,
      phone: null,
      descript: null,
      city: null,
      login: null,
      password: null,
      password2: null,
      imgSrc: null,
    }
  },
  computed: {
      ...mapGetters(['getRequest']),
      /**
       * Когда изображения нет, 
       * текст кнопки долженбыть: "Загрузить аватар",
       * а когда изображение уже загружено: "Поменять"
       */
      btnText(){
          return this.imgSrc == null? "Загрузить аватар": "Поменять"
      }
  },
  methods: {
    
    ...mapActions(["addvolunteer"]),

    /**
     * в этом методе, при изменении поля input file, 
     * т.е. добавлении фотографии, 
     * полученное изображение конвертируется в base64 код
     * и код передаётся в атрибут src через переменную imgSrc
     */
    loadAvatar(e){
        let input = e.target;
        if (input.files && input.files[0]) {
            
            let reader = new FileReader(),
            vm = this;
            
            reader.onload = event => {
                vm.imgSrc = event.target.result;
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    },

    /**
     * само поле для загрузки файлов выглядит не красиво,
     * поэтому оно скрыто (class="hidden"), а на его месте находится кнопка,
     * при нажатии на которую искусственно вызывается событие клика 
     * по полю для загрузки изображения
     */
    fileClick(){
        this.$refs.file.click();
    },

    /**
     * если пользователь передумает загружать аватар,
     * нужно, очистить атрибут src
     */
    deleteSrc(){
        this.imgSrc = null;
    }
  },
}
</script>

<style lang="stylus" scoped>
.hidden
    overflow hidden
    width 0
    height 0
</style>
