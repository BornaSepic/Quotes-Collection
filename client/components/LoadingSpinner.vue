<template>
  <div class="loading-svg">
   <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-book"><path d="M20 25L80 25L80 75L20 75Z" ng-attr-fill="#f0efee" ng-attr-stroke="#050406" ng-attr-stroke-width="3" fill="#f0efee" stroke="#050406" stroke-width="3"></path><path d="M 50 25 L 80 25 L 80 75 L 50 75" ng-attr-fill="#f0efee" ng-attr-stroke="#050406" ng-attr-stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="#f0efee" stroke="#050406" stroke-width="3"><animate attributeName="d" calcMode="linear" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75" keyTimes="0;0.5;0.501;1" dur="1" begin="0s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1" begin="0s" repeatCount="indefinite"></animate></path><path d="M 50 25 L 80 25 L 80 75 L 50 75" ng-attr-fill="#f0efee" ng-attr-stroke="#050406" ng-attr-stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="#f0efee" stroke="#050406" stroke-width="3"><animate attributeName="d" calcMode="linear" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75" keyTimes="0;0.5;0.501;1" dur="1" begin="-0.166s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1" begin="-0.166s" repeatCount="indefinite"></animate></path><path d="M 50 25 L 78.2473 24.7079 L 78.2473 75.2921 L 50 75" ng-attr-fill="#f0efee" ng-attr-stroke="#050406" ng-attr-stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="#f0efee" stroke="#050406" stroke-width="3"><animate attributeName="d" calcMode="linear" values="M50 25L80 25L80 75L50 75;M50 25L50 20L50 80L50 75;M50 25L80 25L80 75L50 75;M50 25L80 25L80 75L50 75" keyTimes="0;0.5;0.501;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="linear" values="1;1;0;0" keyTimes="0;0.5;0.5001;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate></path><path d="M 50 25 L 20 25 L 20 75 L 50 75" ng-attr-fill="#f0efee" ng-attr-stroke="#050406" ng-attr-stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="#f0efee" stroke="#050406" stroke-width="3"><animate attributeName="d" calcMode="linear" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75" keyTimes="0;0.499;0.5;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate></path><path d="M 50 25 L 28.0873 23.6521 L 28.0873 76.3479 L 50 75" ng-attr-fill="#f0efee" ng-attr-stroke="#050406" ng-attr-stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="#f0efee" stroke="#050406" stroke-width="3"><animate attributeName="d" calcMode="linear" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75" keyTimes="0;0.499;0.5;1" dur="1" begin="-0.166s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1" begin="-0.166s" repeatCount="indefinite"></animate></path><path d="M 50 25 L 38.0473 21.9921 L 38.0473 78.0079 L 50 75" ng-attr-fill="#f0efee" ng-attr-stroke="#050406" ng-attr-stroke-width="3" stroke-linejoin="round" stroke-linecap="round" fill="#f0efee" stroke="#050406" stroke-width="3"><animate attributeName="d" calcMode="linear" values="M50 25L20 25L20 75L50 75;M50 25L20 25L20 75L50 75;M50 25L50 20L50 80L50 75;M50 25L20 25L20 75L50 75" keyTimes="0;0.499;0.5;1" dur="1" begin="0s" repeatCount="indefinite"></animate><animate attributeName="opacity" calcMode="linear" values="0;0;1;1" keyTimes="0;0.4999;0.5;1" dur="1" begin="0s" repeatCount="indefinite"></animate></path></svg>
  </div>
</template>

<script>
export default {
  name: 'loading-spinner'
}
</script>

<style>
  .loading-svg {
    position: absolute;
    max-width: 550px;
    width: 100%;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

