# Demo Fulfillment Application

## Authentication Options
1. Supports SSO Requesting for PUL Users via CAS.
2. Supports Library carodholder requests for users with barcodes
3. Fallback for "ACCESS" patrons who don't have a barocde

## Local Development
1. ```git clone git@github.com:pulibrary/fulfillment.git```
2. ```bundle install```
3. ```rake db:create; rake db:migrate``` - Use sqlite for local dev
4. Request forms are mounted off ```/requests```
5. Point the requests.yml value for bibdata_base to a locally running copy of marc_liberation. This is needed to do barcode lookups for CAS users. 
6. To hack on requests gem point Gemfile at a local path where ```git@github.com:pulibrary/requests.git``` has been cloned. Current gem is pinned to ```request_test_specs``` branch. 