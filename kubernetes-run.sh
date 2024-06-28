kubectl apply --validate=false -f mongo-kuber.yaml
kubectl apply --validate=false -f express-kuber.yaml
kubectl apply --validate=false -f react-kuber.yaml

kubectl port-forward pod/express-deployment-7dc4787fdc-tgwgh 30001:3001
kubectl port-forward pod/react-deployment-565ffd48cc-48dsc 30000:3000