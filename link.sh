#!/usr/bin/env bash

cd ./packages/core && npm link
cd ../bare-components && npm link
cd ../vuetify-components && npm link
cd ../meteor-store && npm link
