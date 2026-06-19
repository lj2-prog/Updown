# Updown

## Quick Access

| Service | URL |
|----------|----------|
| Grafana | http://localhost:3001 |
| Prometheus | http://localhost:9090 |
| Temporal UI | http://localhost:8233 |

## Start

```bash
temporal server start-dev --metrics-port 8000
cd updown-temporal && npm start
docker compose up -d
```

The Grafana dashboards are provisioned automatically in the **Updown** folder. Anonymous access is Viewer-only; change the Grafana authentication settings before exposing this stack outside a developer machine.
