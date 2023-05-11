#!/bin/bash
gsutil -h Cache-Control:"Control:public, max-age=0" rsync -d -r site gs://staging.martinbh.dev

