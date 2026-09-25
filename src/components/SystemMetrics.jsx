const SystemMetics = () => {
  const metrics = [
    {
      label: "Request Throughput",
      value: "2.4m+",
      sub: "Request per minutes",
    },
    {
      label: "Average Latency",
      value: "<18ms",
      sub: "Global API response time",
    },
    {
      label: "Uptime SLA",
      value: "99.99%",
      sub: "Gurranted availability",
    },
    {
      label: "Active Deployments",
      value: "14,000+",
      sub: "Production microservices",
    },
  ];

  console.log("Metrics Data Array", metrics);
  console.log("Metrics Data Object:", metrics[1]);
  console.log("Metrics Data object element", metrics[0].label);

  return (
    <section
      id="metrics"
      className="py-20 bg-dark-card/50 border-y border-dark-border"
    >
      <div className="max-w-7xl mx-auto px6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <div key={idx} className="text=-center md:text-left">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemMetics;
