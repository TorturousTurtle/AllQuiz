export const monitoring103Arr = [
  [
    "What are the three main types of monitoring data for investigating root causes?",
    ["Work metrics, resource metrics, and events", "t"],
    ["Latency, throughput, and errors", "f"],
    ["CPU usage, memory usage, and disk usage", "f"],
    ["Error rates, response times, and server load", "f"],
    "The three main types of monitoring data for investigating root causes are work metrics, resource metrics, and events.",
  ],
  [
    "What do work metrics measure?",
    ["Top-level health of a system by measuring its useful output", "t"],
    ["Utilization, saturation, errors, or availability of a resource", "f"],
    ["Discrete, infrequent occurrences in a system", "f"],
    ["Load balancing and capacity planning", "f"],
    "Work metrics measure the top-level health of a system by measuring its useful output.",
  ],
  [
    "What do resource metrics quantify?",
    ["Top-level health of a system by measuring its useful output", "f"],
    ["Utilization, saturation, errors, or availability of a resource", "t"],
    ["Discrete, infrequent occurrences in a system", "f"],
    ["Load balancing and capacity planning", "f"],
    "Resource metrics quantify the utilization, saturation, errors, or availability of a resource that your system depends on.",
  ],
  [
    "What do events describe in monitoring data?",
    ["Top-level health of a system by measuring its useful output", "f"],
    ["Utilization, saturation, errors, or availability of a resource", "f"],
    ["Discrete, infrequent occurrences in a system", "t"],
    ["Load balancing and capacity planning", "f"],
    "Events describe discrete, infrequent occurrences in your system such as code changes, internal alerts, and scaling events.",
  ],
  [
    "What is the first step in the recursive investigation process?",
    ["Start at the top with work metrics", "t"],
    ["Dig into resources", "f"],
    ["Determine if something changed", "f"],
    ["Fix the issue and consider future improvements", "f"],
    "The first step in the recursive investigation process is to start at the top with work metrics.",
  ],
  [
    "What is the second step in the recursive investigation process?",
    ["Start at the top with work metrics", "f"],
    ["Dig into resources", "t"],
    ["Determine if something changed", "f"],
    ["Fix the issue and consider future improvements", "f"],
    "The second step in the recursive investigation process is to dig into resources.",
  ],
  [
    "What is the third step in the recursive investigation process?",
    ["Start at the top with work metrics", "f"],
    ["Dig into resources", "f"],
    ["Determine if something changed", "t"],
    ["Fix the issue and consider future improvements", "f"],
    "The third step in the recursive investigation process is to determine if something changed.",
  ],
  [
    "What is the fourth step in the recursive investigation process?",
    ["Start at the top with work metrics", "f"],
    ["Dig into resources", "f"],
    ["Determine if something changed", "f"],
    ["Fix the issue and consider future improvements", "t"],
    "The fourth step in the recursive investigation process is to fix the issue and consider future improvements.",
  ],
  [
    "Which systems can be considered as resources in your infrastructure?",
    ["Systems that produce useful work", "f"],
    ["Physical resources, software, and external services", "t"],
    ["Systems that are responsible for monitoring", "f"],
    ["Systems that generate events", "f"],
    "Physical resources, software, and external services can be considered as resources in your infrastructure.",
  ],
  [
    "What is the purpose of setting up a dashboard for each system in your infrastructure?",
    ["To monitor the performance of the monitoring system", "f"],
    ["To observe the current and recent state of each system", "t"],
    ["To track the usage of resources by external services", "f"],
    ["To display only the events happening in the system", "f"],
    "The purpose of setting up a dashboard for each system in your infrastructure is to observe the current and recent state of each system.",
  ],
  [
    "What is the advantage of understanding the hierarchy of systems and resources?",
    ["To improve the monitoring system performance", "f"],
    ["To efficiently get to the root of any issues", "t"],
    ["To optimize resource usage across systems", "f"],
    ["To minimize the number of events generated", "f"],
    "Understanding the hierarchy of systems and resources helps you efficiently get to the root of any issues that surface.",
  ],
  [
    "What should be included in a system dashboard?",
    ["Work metrics, resource metrics, and key metrics of subsystems", "t"],
    ["Only the work metrics of that system", "f"],
    ["Only the resource metrics of the system", "f"],
    ["Only the events generated by the system", "f"],
    "A system dashboard should include work metrics of that system, along with resource metrics of the system itself and key metrics of the subsystems it depends on.",
  ],
  [
    "What is the goal of a standardized monitoring framework?",
    ["To investigate problems more systematically", "t"],
    ["To reduce the amount of monitoring data generated", "f"],
    ["To minimize the need for dashboards", "f"],
    ["To eliminate the need for resource metrics", "f"],
    "The goal of a standardized monitoring framework is to investigate problems more systematically.",
  ],
  [
    "Which metric type usually generates the most serious alerts?",
    ["Work metrics", "t"],
    ["Resource metrics", "f"],
    ["Events", "f"],
    ["None of the above", "f"],
    "By and large, work metrics will surface the most serious symptoms and should therefore generate the most serious alerts.",
  ],
  [
    "What is the purpose of overlaying relevant events on the graphs in a dashboard?",
    ["To enhance the visual appearance of the dashboard", "f"],
    ["To make the dashboard more interactive", "f"],
    ["For correlation analysis", "t"],
    ["To reduce the number of graphs in the dashboard", "f"],
    "The purpose of overlaying relevant events on the graphs in a dashboard is for correlation analysis.",
  ],
  [
    "What is the importance of collecting comprehensive measurements for each system?",
    ["To provide a full picture of each system's health and function", "t"],
    ["To increase the number of alerts generated", "f"],
    ["To improve the performance of the monitoring system", "f"],
    ["To focus only on work metrics", "f"],
    "The importance of collecting comprehensive measurements for each system is to provide a full picture of each system's health and function.",
  ],
  [
    "How can you quickly find and peruse metrics for relevant resources?",
    ["By setting up separate dashboards for each resource", "f"],
    ["By setting up dashboards for each system", "t"],
    ["By manually searching through the raw monitoring data", "f"],
    ["By relying on external services to provide the data", "f"],
    "You can quickly find and peruse metrics for relevant resources by setting up dashboards for each system.",
  ],
  [
    "When should you add more instrumentation to your system?",
    ["When you have too many dashboards", "f"],
    ["When you do not have the data needed to quickly diagnose a problem", "t"],
    ["When the number of events generated is too high", "f"],
    ["When resource metrics are too detailed", "f"],
    "You should add more instrumentation to your system when you do not have the data needed to quickly diagnose a problem.",
  ],
  [
    "What is the main benefit of having a mental model of how your systems interact?",
    ["To optimize resource usage across systems", "f"],
    ["To quickly focus on key diagnostic metrics for any incident", "t"],
    ["To minimize the need for dashboards", "f"],
    ["To enhance the performance of the monitoring system", "f"],
    "The main benefit of having a mental model of how your systems interact is to quickly focus on key diagnostic metrics for any incident.",
  ],
  [
    "What is the purpose of examining work metrics for the highest-level system exhibiting problems?",
    [
      "To point to the source of the problem or set the direction for investigation",
      "t",
    ],
    ["To determine if any resources are unavailable", "f"],
    ["To identify any code releases or internal alerts", "f"],
    ["To fix the issue immediately without further investigation", "f"],
    "The purpose of examining work metrics for the highest-level system exhibiting problems is to point to the source of the problem or set the direction for investigation.",
  ],
  [
    "What happens when you haven't found the cause of the problem by inspecting top-level work metrics?",
    ["You should stop the investigation", "f"],
    ["You should examine the resources that the system uses", "t"],
    ["You should focus on events only", "f"],
    ["You should fix the issue without further investigation", "f"],
    "When you haven't found the cause of the problem by inspecting top-level work metrics, you should examine the resources that the system uses.",
  ],
  [
    "How can you determine if a code release, internal alert, or other event is connected to the problem?",
    [
      "By checking if the event was registered slightly before problems started occurring",
      "t",
    ],
    ["By examining the work metrics of the highest-level system", "f"],
    ["By examining the resources that the system uses", "f"],
    ["By focusing on the physical resources of the server", "f"],
    "You can determine if a code release, internal alert, or other event is connected to the problem by checking if the event was registered slightly before problems started occurring.",
  ],
  [
    "When is your investigation considered complete?",
    ["When you have identified all possible causes", "f"],
    ["When symptoms disappear", "t"],
    ["When you have examined all work metrics", "f"],
    ["When you have checked all resource metrics", "f"],
    "Your investigation is considered complete when symptoms disappear.",
  ],
  [
    "What is the primary goal of a monitoring system after notifying you of a symptom that requires attention?",
    ["To automatically fix the problem", "f"],
    [
      "To help you diagnose the root cause by making your systems observable",
      "t",
    ],
    ["To generate alerts for other systems", "f"],
    ["To notify other team members", "f"],
    "The primary goal of a monitoring system after notifying you of a symptom that requires attention is to help you diagnose the root cause by making your systems observable.",
  ],
  [
    "Why are work metrics essential in a monitoring system?",
    ["They are the only metrics that matter", "f"],
    [
      "They surface the most serious symptoms and generate the most serious alerts",
      "t",
    ],
    ["They provide information about resource availability", "f"],
    ["They are used for optimizing system performance", "f"],
    "Work metrics are essential in a monitoring system because they surface the most serious symptoms and generate the most serious alerts.",
  ],
  [
    "What should you do if you find that a resource is unavailable or highly utilized?",
    ["Ignore the issue", "f"],
    [
      "Recurse into those resources and begin investigating each of them at step 1",
      "t",
    ],
    ["Notify your team and wait for their response", "f"],
    ["Attempt to fix the issue without further investigation", "f"],
    "If you find that a resource is unavailable or highly utilized, you should recurse into those resources and begin investigating each of them at step 1.",
  ],
  [
    "What types of events should be considered during the monitoring process?",
    ["Code changes", "t"],
    ["Internal alerts", "t"],
    ["Scaling events", "t"],
    ["Unrelated external events", "f"],
    "During the monitoring process, you should consider events such as code changes, internal alerts, and scaling events.",
  ],
  [
    "What is the main purpose of setting up dashboards in advance?",
    ["To reduce the amount of data collected", "f"],
    ["To speed your investigation during an outage", "t"],
    ["To improve the performance of the monitoring system", "f"],
    ["To avoid the need for resource metrics", "f"],
    "The main purpose of setting up dashboards in advance is to speed your investigation during an outage.",
  ],
  [
    "What should be displayed on the dashboard for each system?",
    ["Only work metrics", "f"],
    ["Only resource metrics", "f"],
    [
      "Key metrics, including work and resource metrics, with relevant events overlaid",
      "t",
    ],
    ["Only events", "f"],
    "The dashboard for each system should display key metrics, including work and resource metrics, with relevant events overlaid.",
  ],
  [
    "What is the first question you should ask yourself when starting a recursive investigation?",
    ["How can I fix it?", "f"],
    ["Is there a problem? How can I characterize it?", "t"],
    ["Which resources are affected?", "f"],
    ["What are the relevant events?", "f"],
    'The first question you should ask yourself when starting a recursive investigation is, "Is there a problem? How can I characterize it?"',
  ],
  [
    "Why is it essential to have sufficiently comprehensive measurements in a monitoring system?",
    ["To provide a full picture of each system's health and function", "t"],
    ["To minimize the need for dashboards", "f"],
    ["To reduce the workload on the monitoring system", "f"],
    ["To speed up the data collection process", "f"],
    "It is essential to have sufficiently comprehensive measurements in a monitoring system to provide a full picture of each system's health and function.",
  ],
  [
    "Which of the following is not one of the main types of monitoring data?",
    ["Work metrics", "f"],
    ["Resource metrics", "f"],
    ["Events", "f"],
    ["Cost metrics", "t"],
    "Cost metrics is not one of the main types of monitoring data.",
  ],
  [
    "What is the role of events in the monitoring process?",
    ["To replace work and resource metrics", "f"],
    ["To provide additional context for investigations", "t"],
    ["To determine system health directly", "f"],
    ["To reduce the need for dashboards", "f"],
    "The role of events in the monitoring process is to provide additional context for investigations.",
  ],
  [
    "In which step of the recursive investigation process should you consider alerts and other events?",
    ["Step 1: Start at the top with work metrics", "f"],
    ["Step 2: Dig into resources", "f"],
    ["Step 3: Did something change?", "t"],
    ["Step 4: Fix it (and don't forget it)", "f"],
    "In the recursive investigation process, you should consider alerts and other events in Step 3: Did something change?",
  ],
  [
    "What is the primary purpose of resource metrics in a monitoring system?",
    ["To help investigate the causes of serious symptoms", "t"],
    ["To replace work metrics", "f"],
    ["To provide information about code changes", "f"],
    ["To notify you of system outages", "f"],
    "The primary purpose of resource metrics in a monitoring system is to help investigate the causes of serious symptoms.",
  ],
  [
    "What is the significance of understanding the hierarchy of systems and resources in your infrastructure?",
    ["To minimize the need for monitoring", "f"],
    ["To help efficiently get to the root of any issues that surface", "t"],
    ["To reduce the number of metrics collected", "f"],
    ["To increase system performance", "f"],
    "Understanding the hierarchy of systems and resources in your infrastructure is significant because it helps efficiently get to the root of any issues that surface.",
  ],
  [
    "What is the final step of the recursive investigation process?",
    ["Fix it (and don't forget it)", "t"],
    ["Start at the top with work metrics", "f"],
    ["Dig into resources", "f"],
    ["Did something change?", "f"],
    'The final step of the recursive investigation process is "Fix it (and don\'t forget it)".',
  ],
  [
    "What type of resources are considered in the monitoring process?",
    ["Only physical resources", "f"],
    ["Only software resources", "f"],
    [
      "Both physical resources and software or external services that serve as resources",
      "t",
    ],
    ["Neither physical nor software resources", "f"],
    "In the monitoring process, both physical resources and software or external services that serve as resources are considered.",
  ],
  [
    "According to the article, why is it important to describe the issue clearly at the outset of an investigation?",
    ["To ensure the monitoring system is functioning properly", "f"],
    [
      "To avoid losing track as you dive deeper into your systems to diagnose the issue",
      "t",
    ],
    ["To minimize the number of metrics collected", "f"],
    ["To improve the performance of the monitoring system", "f"],
    "According to the article, it is important to describe the issue clearly at the outset of an investigation to avoid losing track as you dive deeper into your systems to diagnose the issue.",
  ],
  [
    "What is the goal of making systems observable via the monitoring data?",
    ["To replace the monitoring system", "f"],
    ["To improve system performance", "f"],
    ["To help diagnose the root cause of an issue", "t"],
    ["To provide information about code changes", "f"],
    "The goal of making systems observable via the monitoring data is to help diagnose the root cause of an issue.",
  ],
  [
    "What should each system's dashboard display according to the article?",
    ["Only work metrics of the system", "f"],
    ["Only resource metrics of the system", "f"],
    [
      "The work metrics of the system, resource metrics of the system itself, and key metrics of the subsystems it depends on",
      "t",
    ],
    ["Only key metrics of the subsystems it depends on", "f"],
    "Each system's dashboard should display the work metrics of the system, resource metrics of the system itself, and key metrics of the subsystems it depends on.",
  ],
  [
    "What should you do if you didn't have the data needed to quickly diagnose the problem?",
    ["Ignore the missing data", "f"],
    [
      "Add more instrumentation to your system to ensure those metrics and events are available for future responders",
      "t",
    ],
    ["Blame the monitoring system", "f"],
    ["Wait for the problem to solve itself", "f"],
    "If you didn't have the data needed to quickly diagnose the problem, you should add more instrumentation to your system to ensure those metrics and events are available for future responders.",
  ],
  [
    "Which type of monitoring data is useful for investigating the root causes of problems in your infrastructure?",
    ["Only work metrics", "f"],
    ["Only resource metrics", "f"],
    ["Only events", "f"],
    ["All three: work metrics, resource metrics, and events", "t"],
    "All three types of monitoring data: work metrics, resource metrics, and events, are useful for investigating the root causes of problems in your infrastructure.",
  ],
  [
    "When examining work metrics for the highest-level system, what will these metrics often do?",
    [
      "Point to the source of the problem or set the direction for your investigation",
      "t",
    ],
    ["Provide information about code changes", "f"],
    ["Replace the need for resource metrics", "f"],
    ["Directly solve the problem", "f"],
    "When examining work metrics for the highest-level system, these metrics will often point to the source of the problem or set the direction for your investigation.",
  ],
  [
    "What should you do when an alert notifies you of a possible problem?",
    ["Ignore the alert", "f"],
    ["Wait for the problem to resolve itself", "f"],
    ["Follow the recursive investigation process", "t"],
    ["Check only the work metrics", "f"],
    "When an alert notifies you of a possible problem, you should follow the recursive investigation process.",
  ],
  [
    "What is the purpose of overlaying relevant events on the graphs for correlation analysis?",
    ["To replace the need for resource metrics", "f"],
    ["To provide additional context during investigations", "t"],
    ["To reduce the number of metrics collected", "f"],
    ["To improve system performance", "f"],
    "The purpose of overlaying relevant events on the graphs for correlation analysis is to provide additional context during investigations.",
  ],
  [
    "Which type of monitoring data measures the top-level health of your system by measuring its useful output?",
    ["Work metrics", "t"],
    ["Resource metrics", "f"],
    ["Events", "f"],
    ["Cost metrics", "f"],
    "Work metrics measure the top-level health of your system by measuring its useful output.",
  ],
  [
    "What type of monitoring data quantifies the utilization, saturation, errors, or availability of a resource?",
    ["Work metrics", "f"],
    ["Resource metrics", "t"],
    ["Events", "f"],
    ["Cost metrics", "f"],
    "Resource metrics quantify the utilization, saturation, errors, or availability of a resource.",
  ],
  [
    "Which type of monitoring data describes discrete, infrequent occurrences in your system?",
    ["Work metrics", "f"],
    ["Resource metrics", "f"],
    ["Events", "t"],
    ["Cost metrics", "f"],
    "Events describe discrete, infrequent occurrences in your system.",
  ],
  [
    "What is the first step in the recursive investigation process?",
    ["Start at the top with work metrics", "t"],
    ["Dig into resources", "f"],
    ["Check for any changes", "f"],
    ["Fix the issue", "f"],
    "The first step in the recursive investigation process is to start at the top with work metrics.",
  ],
  [
    "What should you do if you haven't found the cause of the problem by inspecting top-level work metrics?",
    ["Ignore the problem", "f"],
    ["Wait for the problem to solve itself", "f"],
    ["Examine the resources that the system uses", "t"],
    ["Only check work metrics", "f"],
    "If you haven't found the cause of the problem by inspecting top-level work metrics, you should examine the resources that the system uses.",
  ],
  [
    "In the recursive investigation process, what is the purpose of considering alerts and other events?",
    ["To find correlations with your metrics", "t"],
    ["To replace the need for resource metrics", "f"],
    ["To reduce the number of metrics collected", "f"],
    ["To improve system performance", "f"],
    "In the recursive investigation process, the purpose of considering alerts and other events is to find correlations with your metrics.",
  ],
  [
    "What is the final step in the recursive investigation process?",
    ["Start at the top with work metrics", "f"],
    ["Dig into resources", "f"],
    ["Check for any changes", "f"],
    [
      "Fix the issue and think about how to change the system to avoid similar problems in the future",
      "t",
    ],
    "The final step in the recursive investigation process is to fix the issue and think about how to change the system to avoid similar problems in the future.",
  ],
  [
    "What is the benefit of setting up dashboards in advance?",
    ["To speed up your investigation during an outage", "t"],
    ["To replace the need for resource metrics", "f"],
    ["To reduce the number of metrics collected", "f"],
    ["To improve system performance", "f"],
    "The benefit of setting up dashboards in advance is to speed up your investigation during an outage.",
  ],
  [
    'What is the main idea of the article "monitoring103"?',
    ["Monitoring systems should only focus on symptom detection", "f"],
    [
      "Monitoring systems should help diagnose the root cause of an issue by making systems observable",
      "t",
    ],
    ["Monitoring systems should only focus on resource metrics", "f"],
    ["Monitoring systems should only focus on work metrics", "f"],
    'The main idea of the article "monitoring103" is that monitoring systems should help diagnose the root cause of an issue by making systems observable.',
  ],
];
