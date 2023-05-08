export const monitoring102Arr = [
    [
        'What is the main benefit of automated alerts in monitoring?',
        ['Saving time by automating data collection', 'f'],
        ['Quickly identifying and addressing issues', 't'],
        ['Providing a real-time view of system health', 'f'],
        ['Reducing the need for human intervention', 'f'],
        'The main benefit of automated alerts in monitoring is quickly identifying and addressing issues.'
    ],
    [
        'What is the purpose of alerts with low severity?',
        ['To escalate issues for immediate attention', 'f'],
        ['To notify someone of an issue requiring urgent action', 'f'],
        ['To log issues for future reference or investigation', 't'],
        ['To ignore issues that are not important', 'f'],
        'The purpose of alerts with low severity is to log issues for future reference or investigation.'
    ],
    [
        'What is the appropriate response to a moderate severity alert?',
        ['Sending an email or chat room notification', 't'],
        ['Escalating the issue to a page', 'f'],
        ['Ignoring the issue', 'f'],
        ['Automating a response', 'f'],
        'The appropriate response to a moderate severity alert is sending an email or chat room notification.'
    ],
    [
        'When should an issue generate a high-severity alert?',
        ['When it requires immediate human intervention', 't'],
        ['When it requires eventual human intervention', 'f'],
        ['When it is not an urgent issue', 'f'],
        ['When it is a low priority issue', 'f'],
        'An issue should generate a high-severity alert when it requires immediate human intervention.'
    ],
    [
        'When determining the level of urgency for an alert, which question should you ask?',
        ['Is this issue real?', 't'],
        ['Is this issue interesting?', 'f'],
        ['Is this issue caused by a test environment?', 'f'],
        ['Is this issue related to an upgrade?', 'f'],
        'When determining the level of urgency for an alert, you should ask, "Is this issue real?"'
    ],
    [
        'What is the advantage of paging on symptoms rather than causes?',
        ['It reduces alert noise', 'f'],
        ['It focuses on user-facing problems', 't'],
        ['It detects issues before they become problems', 'f'],
        ['It simplifies the alerting process', 'f'],
        'The advantage of paging on symptoms rather than causes is that it focuses on user-facing problems.'
    ],
    [
        'What is the primary reason for paging on early warning signs?',
        ['To anticipate and prevent serious issues', 't'],
        ['To respond to non-urgent issues', 'f'],
        ['To monitor non-critical resources', 'f'],
        ['To track transient issues', 'f'],
        'The primary reason for paging on early warning signs is to anticipate and prevent serious issues.'
    ],
    [
        'What is an example of an early warning metric?',
        ['High server load', 'f'],
        ['Slow website responses', 'f'],
        ['Running low on disk space', 't'],
        ['Increased network latency', 'f'],
        'An example of an early warning metric is running low on disk space.'
    ],
    [
        'What type of alert should be triggered when a critical and finite resource limit is about to be reached?',
        ['Low-severity alert', 'f'],
        ['Moderate-severity alert', 'f'],
        ['High-severity alert', 't'],
        ['No alert', 'f'],
        'A high-severity alert should be triggered when a critical and finite resource limit is about to be reached.'
    ],
    [
        'Why is it important to log alerts even if they have not affected overall performance?',
        ['To provide context for future investigations', 't'],
        ['To notify users of potential issues', 'f'],
        ['To track false positives', 'f'],
        ['To improve system performance', 'f'],
        'It is important to log alerts even if they have not affected overall performance to provide context for future investigations.'
    ],
    [
        'What is the main disadvantage of overusing pages?',
        ['They can be less effective for delivering information', 'f'],
        ['They can cause alert fatigue', 't'],
        ['They can lead to a loss of data', 'f'],
        ['They can consume system resources', 'f'],
        'The main disadvantage of overusing pages is that they can cause alert fatigue.'
    ],
    [
        'Which of the following is an example of a symptom?',
        ['High database latency', 'f'],
        ['Failed application servers', 'f'],
        ['Website responding very slowly', 't'],
        ['Memcached being down', 'f'],
        'An example of a symptom is a website responding very slowly.'
    ],
    [
        'What is an advantage of symptom-triggered alerts?',
        ['They are less disruptive', 'f'],
        ['They are easier to set up', 'f'],
        ['They tend to be durable', 't'],
        ['They are less prone to false positives', 'f'],
        'An advantage of symptom-triggered alerts is that they tend to be durable.'
    ],
    [
        'Which of the following is a situation where an alert should not be generated?',
        ['Metrics in a test environment are out of bounds', 't'],
        ['A key system stops doing work at an acceptable rate', 'f'],
        ['A critical resource limit is about to be reached', 'f'],
        ['A system is experiencing slow response times', 'f'],
        'A situation where an alert should not be generated is when metrics in a test environment are out of bounds.'
    ],
    [
        'Which of the following is a reason to automate a response to an issue?',
        ['To avoid calling someone away from work, sleep, or personal time', 't'],
        ['To increase the urgency of the issue', 'f'],
        ['To create more alerts', 'f'],
        ['To improve system performance', 'f'],
        'A reason to automate a response to an issue is to avoid calling someone away from work, sleep, or personal time.'
    ],
    [
        'Which type of alert is the least disruptive?',
        ['Alerts as records', 't'],
        ['Alerts as notifications', 'f'],
        ['Alerts as pages', 'f'],
        ['All alerts are equally disruptive', 'f'],
        'Alerts as records are the least disruptive.'
    ],
    [
        'What is the main goal of automated alerts in monitoring?',
        ['To draw human attention to specific systems', 't'],
        ['To eliminate the need for human intervention', 'f'],
        ['To reduce system latency', 'f'],
        ['To improve system throughput', 'f'],
        'The main goal of automated alerts in monitoring is to draw human attention to specific systems that require observation, inspection, and intervention.'
    ],
    [
        'What should an alert communicate?',
        ['General system status', 'f'],
        ['Something specific about your systems in plain language', 't'],
        ['Resource usage statistics', 'f'],
        ['Upcoming system maintenance', 'f'],
        'An alert should communicate something specific about your systems in plain language.'
    ],
    [
        'What is the purpose of logging low-urgency alerts?',
        ['For future reference or investigation', 't'],
        ['To notify users of potential issues', 'f'],
        ['To improve system performance', 'f'],
        ['To reduce response times', 'f'],
        'The purpose of logging low-urgency alerts is for future reference or investigation.'
    ],
    [
        'How should moderate severity alerts be delivered?',
        ['Via email and/or chat room notifications', 't'],
        ['By logging them to a central location', 'f'],
        ['By escalating to a page', 'f'],
        ['By automated phone call', 'f'],
        'Moderate severity alerts should be delivered via email and/or chat room notifications.'
    ],
    [
        'Which of the following should generate a high severity alert?',
        ['A data store serving queries slower than usual', 'f'],
        ['A system running low on disk space', 'f'],
        ['Response times exceeding the internal SLA', 't'],
        ['A single server working slowly but not affecting overall performance', 'f'],
        'Response times exceeding the internal SLA should generate a high severity alert.'
    ],
    [
        'What should be done when an issue is real but does not require attention?',
        ['Generate an alert but do not notify anyone', 't'],
        ['Send an email to the service owner', 'f'],
        ['Page someone to investigate the issue', 'f'],
        ['Ignore the issue completely', 'f'],
        'When an issue is real but does not require attention, generate an alert but do not notify anyone.'
    ],
    [
        'What is the main reason to focus on symptoms instead of causes when setting up alerts?',
        ['Symptoms are easier to monitor', 'f'],
        ['Focusing on symptoms surfaces real, user-facing problems', 't'],
        ['Causes are less important than symptoms', 'f'],
        ['Symptoms require less resources to monitor', 'f'],
        'The main reason to focus on symptoms instead of causes when setting up alerts is that focusing on symptoms surfaces real, user-facing problems.'
    ],
    [
        'What is an example of an early warning metric?',
        ['Disk space', 't'],
        ['Website response time', 'f'],
        ['CPU usage', 'f'],
        ['Network latency', 'f'],
        'An example of an early warning metric is disk space.'
    ],
    [
        'What type of alert is most likely to wake someone in the middle of the night?',
        ['Alerts as records', 'f'],
        ['Alerts as notifications', 'f'],
        ['Alerts as pages', 't'],
        ['All alerts have equal chances', 'f'],
        'Alerts as pages are most likely to wake someone in the middle of the night.'
    ],
    [
        'What is the main advantage of symptom-triggered alerts?',
        ['They are durable', 't'],
        ['They consume fewer system resources', 'f'],
        ['They are faster to set up', 'f'],
        ['They are more reliable', 'f'],
        'The main advantage of symptom-triggered alerts is that they are durable.'
    ],
    [
        'What is the first question to ask when setting up an alert?',
        ['Does this issue require attention?', 'f'],
        ['Is this issue urgent?', 'f'],
        ['Is this issue real?', 't'],
        ['Can this issue be automated?', 'f'],
        'The first question to ask when setting up an alert is: "Is this issue real?"'
    ],
    [
        'Which type of alert should be escalated to a page?',
        ['Low severity alerts', 'f'],
        ['Moderate severity alerts', 'f'],
        ['High severity alerts', 't'],
        ['All types of alerts', 'f'],
        'High severity alerts should be escalated to a page.'
    ],
    [
        'Why is it important to have alerts recorded within your monitoring system?',
        ['To monitor the performance of the alerts', 'f'],
        ['For later analysis and correlation', 't'],
        ['To reduce system latency', 'f'],
        ['To improve alert accuracy', 'f'],
        'It is important to have alerts recorded within your monitoring system for later analysis and correlation.'
    ],
    [
        'What is a key reason to automate a response to an issue instead of alerting?',
        ['Automated responses are always faster', 'f'],
        ['To reduce alert fatigue and minimize disruption', 't'],
        ['Automated responses are more accurate', 'f'],
        ['Alerting is not effective', 'f'],
        'A key reason to automate a response to an issue instead of alerting is to reduce alert fatigue and minimize disruption.'
    ],
    [
        'When should an engineer be paged?',
        ['When a real issue is detected but does not require attention', 'f'],
        ['When a real issue requires attention but is not urgent', 'f'],
        ['When a real issue requires attention and is urgent', 't'],
        ['When a potential issue is detected in a test environment', 'f'],
        'An engineer should be paged when a real issue requires attention and is urgent.'
    ],
    [
        'What is one way to determine if an alert requires human intervention?',
        ['By examining the system logs', 'f'],
        ['By checking the alert\'s level of urgency', 't'],
        ['By measuring the impact on system performance', 'f'],
        ['By evaluating the alert\'s frequency', 'f'],
        'One way to determine if an alert requires human intervention is by checking the alert\'s level of urgency.'
    ],
    [
        'In what situations should you consider paging on early warning signs?',
        ['When a critical and finite resource limit is about to be reached', 't'],
        ['When transient issues are detected', 'f'],
        ['When a single server is performing slowly', 'f'],
        ['When a system architecture change is planned', 'f'],
        'You should consider paging on early warning signs when a critical and finite resource limit is about to be reached.'
    ],
    [
        'What are the main factors to consider when setting alert thresholds?',
        ['System capacity, user experience, and operational resources', 't'],
        ['Alert frequency, storage capacity, and system architecture', 'f'],
        ['Latency, throughput, and system logs', 'f'],
        ['Network usage, server load, and application version', 'f'],
        'The main factors to consider when setting alert thresholds are system capacity, user experience, and operational resources.'
    ],
    [
        'What is an effective way to minimize alert fatigue?',
        ['Increasing the number of alerts', 'f'],
        ['Setting alerts for every possible event', 'f'],
        ['Properly prioritizing alerts and reducing unnecessary notifications', 't'],
        ['Ignoring low-priority alerts', 'f'],
        'An effective way to minimize alert fatigue is by properly prioritizing alerts and reducing unnecessary notifications.'
    ],
    [
        'Why should you include context in alert messages?',
        ['To save time by not having to look up additional information', 't'],
        ['To make the message visually appealing', 'f'],
        ['To improve system performance', 'f'],
        ['To reduce the number of alerts generated', 'f'],
        'Including context in alert messages saves time by not having to look up additional information.'
    ],
    [
        'What is the main reason to avoid alerting on cause-triggered events?',
        ['Cause-triggered alerts are less accurate', 'f'],
        ['They are more resource-intensive', 'f'],
        ['They may not represent real, user-facing issues', 't'],
        ['Cause-triggered alerts are harder to set up', 'f'],
        'The main reason to avoid alerting on cause-triggered events is that they may not represent real, user-facing issues.'
    ],
    [
        'What is the primary purpose of monitoring?',
        ['To detect and respond to issues that impact system performance and user experience', 't'],
        ['To track and analyze user behavior', 'f'],
        ['To optimize system resources', 'f'],
        ['To facilitate system upgrades', 'f'],
        'The primary purpose of monitoring is to detect and respond to issues that impact system performance and user experience.'
    ],
    [
        'Which of these is a symptom-based alert?',
        ['CPU usage exceeding a specific threshold', 'f'],
        ['Error rates increasing beyond an acceptable level', 't'],
        ['Database connections reaching the maximum limit', 'f'],
        ['Disk space usage nearing 90%', 'f'],
        'Error rates increasing beyond an acceptable level is a symptom-based alert.'
    ],
    [
        'What is the purpose of having a well-defined internal SLA?',
        ['To provide a guideline for acceptable system performance and help prioritize alerts', 't'],
        ['To define a legal agreement between the service provider and the customer', 'f'],
        ['To determine system resource allocation', 'f'],
        ['To outline system upgrade schedules', 'f'],
        'The purpose of having a well-defined internal SLA is to provide a guideline for acceptable system performance and help prioritize alerts.'
    ],
    [
        'Which of the following should not trigger an alert?',
        ['A critical system service failing', 'f'],
        ['A single server experiencing high CPU usage for a short period', 't'],
        ['System response times exceeding the internal SLA', 'f'],
        ['A database running out of connections', 'f'],
        'A single server experiencing high CPU usage for a short period should not trigger an alert.'
    ],
    [
        'What is the main advantage of using an alerting system?',
        ['Automatically detecting and responding to system issues', 't'],
        ['Improving system performance', 'f'],
        ['Reducing the need for system maintenance', 'f'],
        ['Upgrading system components', 'f'],
        'The main advantage of using an alerting system is automatically detecting and responding to system issues.'
    ],
    [
        'What is an example of a cause-based alert?',
        ['A specific server experiencing high memory usage', 't'],
        ['Website response times being slow', 'f'],
        ['An increase in error rates', 'f'],
        ['A decrease in user satisfaction', 'f'],
        'A specific server experiencing high memory usage is an example of a cause-based alert.'
    ],
    [
        'Which of the following alerts should be considered as high priority?',
        ['An increase in response times during peak hours', 't'],
        ['A slight increase in error rates during off-peak hours', 'f'],
        ['A temporary spike in resource usage', 'f'],
        ['A planned system maintenance event', 'f'],
        'An increase in response times during peak hours should be considered as high priority.'
    ],
    [
        'How can alert fatigue be reduced?',
        ['By setting up alerts for every possible event', 'f'],
        ['By logging all alerts in a central location', 'f'],
        ['By properly categorizing and prioritizing alerts', 't'],
        ['By ignoring low-priority alerts', 'f'],
        'Alert fatigue can be reduced by properly categorizing and prioritizing alerts.'
    ],
    [
        'What is the significance of monitoring early warning metrics?',
        ['To prevent or mitigate potential issues before they become critical', 't'],
        ['To determine the root cause of an issue', 'f'],
        ['To measure system performance improvements', 'f'],
        ['To track user behavior', 'f'],
        'The significance of monitoring early warning metrics is to prevent or mitigate potential issues before they become critical.'
    ],
    [
        'What should be included in an effective alert message?',
        ['A detailed log of system events', 'f'],
        ['A brief description of the issue and relevant context', 't'],
        ['A list of potential solutions', 'f'],
        ['All performance metrics for the affected system', 'f'],
        'An effective alert message should include a brief description of the issue and relevant context.'
    ],
    [
        'How should low-severity alerts be handled?',
        ['By paging someone immediately', 'f'],
        ['By sending an email notification', 'f'],
        ['By logging the alert for future reference', 't'],
        ['By ignoring the alert completely', 'f'],
        'Low-severity alerts should be handled by logging the alert for future reference.'
    ],
    [
        'What is a reason to avoid alerting on early warning signs?',
        ['To prevent unnecessary interruptions and alert fatigue', 't'],
        ['Early warning signs are not reliable', 'f'],
        ['Alerting on early warning signs is resource-intensive', 'f'],
        ['Alerting on early warning signs is difficult to set up', 'f'],
        'A reason to avoid alerting on early warning signs is to prevent unnecessary interruptions and alert fatigue.'
    ],
    [
        'Why should you monitor and alert on both symptoms and causes?',
        ['To ensure that alerts are comprehensive and actionable', 't'],
        ['To increase the number of alerts generated', 'f'],
        ['To improve system performance', 'f'],
        ['To make the alerting system more complex', 'f'],
        'Monitoring and alerting on both symptoms and causes ensures that alerts are comprehensive and actionable.']
]