import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import MedicoList from '../components/medico/MedicoList.vue';
import PacienteList from '../components/paciente/PacienteList.vue';

export const routes = [
    {
        path: '/home/medico',
        component: MedicoList
    },
    {
        path: '/home/paciente',
        component: PacienteList
    }
]

