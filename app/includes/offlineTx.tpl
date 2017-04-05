<main class="tab-pane active" ng-if="globalService.currentTab==globalService.tabs.offlineTransaction.id" ng-controller='offlineTxCtrl' ng-cloak>

  <!-- Title -->
  <h1 translate="OFFLINE_Title"> Generate & Send Offline Transaction </h1>
  <p translate="OFFLINE_Desc"> Generating offline transactions can be done in three steps. You will complete steps 1 and 3 on an online computer, and step 2 on an offline/airgapped computer. This ensures your private keys do not touch an internet-connected device. </p>
  <!-- / Title -->

  <hr />

  @@if (site === 'cew' ) { @@include( './offlineTx-1.tpl',     { "site": "cew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-1.tpl',     { "site": "cx"  } ) }

  @@if (site === 'cew' ) { @@include( './offlineTx-2.tpl',     { "site": "cew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-2.tpl',     { "site": "cx"  } ) }

  @@if (site === 'cew' ) { @@include( './offlineTx-3.tpl',     { "site": "cew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-3.tpl',     { "site": "cx"  } ) }

  @@if (site === 'cew' ) { @@include( './offlineTx-modal.tpl', { "site": "cew" } ) }
  @@if (site === 'cx'  ) { @@include( './offlineTx-modal.tpl', { "site": "cx"  } ) }

</main>
