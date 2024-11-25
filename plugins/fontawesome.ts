import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub , faFacebook ,faXTwitter ,faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faUser, faHome, faCoffee, faCartShopping , faMagnifyingGlass , faCircleUser ,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faHome, faCoffee, faGithub, faCartShopping ,faMagnifyingGlass,faFacebook,faInstagram,faXTwitter ,faCircleUser ,faRightFromBracket);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});