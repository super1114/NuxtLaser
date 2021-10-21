<template>
    <v-form v-model="valid">
        <v-text-fiel v-model="userInfo.name"
                     label="Name"
                     :rules="[required('name')]"
                     v-if="hasName" />
        <v-text-fiel v-model="userInfo.email"
                     label="Email"
                     :rules="[required('email'), emailFromat()]" />
        <v-text-fiel v-model="userInfo.password"
                     label="Password"
                     :type="showPassword ? 'text' : 'password'"
                     :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                     @click:append="showPassword = !showPassword"
                     counter=ture
                     :rules="[required('password'), minLength('passowrd', 8)]" />
        <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{ buttonText }}</v-btn>
    </v-form>
</template>