<template>
  <q-page class="flex flex-center">

    <!-- точка входа для неавторизованных пользователей -->
    <q-card v-if="!getClient" style="width: 100%; max-width: 400px">

      <q-card-section class="text-center text-light-blue-6">
        <h3>Вход</h3>
      </q-card-section>

      <q-card-section>
        <q-input standout="bg-light-blue-6 text-white" label="Логин"/>
      </q-card-section>

      <q-card-section>
        <q-input standout="bg-light-blue-6 text-white" label="Пароль"/>
      </q-card-section>

      <q-card-section>
        <q-btn label="отправить" color="light-blue-6" class="full-width" @click="Login(data)"/>
      </q-card-section>
    </q-card>

    <!-- Профиль для уже авторизованных пользователей -->
    <q-card v-else class="col-12 col-md-9 row" style="width: 100%; max-width: 700px">
      <q-card-section class="col-12 text-light-blue-6 flex flex-center">
          <div class="text-h4">
              {{getClient.surname}} {{getClient.name}} {{getClient.patronymic}}
          </div>
      </q-card-section>
      <q-card-section>
          
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
  data(){
    return {
      data : {
        login: "",
        password: ""
      }
    }
  },
  methods: mapActions(['Login']),
  computed: mapGetters(['getClient'])
}
</script>
