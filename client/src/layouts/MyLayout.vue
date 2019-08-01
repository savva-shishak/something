<template>
    <q-layout view="lHh Lpr lFf">

        <!-- Шапка -->
        <q-header elevated class="bg-light-blue-6">
            <q-toolbar>
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
                    <q-icon name="fas fa-bars" />
                </q-btn>

                <q-toolbar-title>
                    {{getClient? getClient.name: "Гость"}}
                </q-toolbar-title>

                <div>
                    <q-btn v-show="getClient" @click="output" label="Выход"/>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-white" :height="'100%'">
            <q-list>
                <q-item-label header>Тобольск</q-item-label>

                <!-- Вход или профиль -->
                <router-link tag="span" to="/login">
                    <q-item tag="a">
                        <q-item-section avatar>
                            <q-icon color="light-blue-6" name="far fa-hand-paper" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>{{getClient?'Профиль':'Вход'}}</q-item-label>
                        </q-item-section>
                    </q-item>
                </router-link>
                <!-- /Вход или профиль -->

                <!-- Регистрация -->
                <router-link tag="span" to="/sigin">
                    <q-item tag="a">
                        <q-item-section avatar>
                            <q-icon color="light-blue-6" name="far fa-hand-paper" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Регистрация</q-item-label>
                        </q-item-section>
                    </q-item>
                </router-link>
                <!-- /Регистрация -->
            </q-list>
        </q-drawer>

        <!-- Содержимое -->
        <q-page-container>
            <router-view />
        </q-page-container>
        <!-- /Содержимое -->
    </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    ...mapActions(['greeting', 'output'])
  },
  /**
   * Приветствие, когда пользователь вошёл в систему
   */
  mounted(){
    this.greeting()
  },
  computed: mapGetters(['getClient'])
}
</script>

<style>
</style>
