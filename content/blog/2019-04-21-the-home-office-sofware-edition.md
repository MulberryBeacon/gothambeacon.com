---
title: The Home Office (Software Edition)
slug: the-home-office-software-edition
date: 2019-04-21 20:00:00
aliases:
    - /2019/04/21/the-home-office-software-edition/
description: With the desktop PC in place, the next step was to rethink my software infrastructure. That meant reviewing the way I work and watch media content at home to choose the right software to make everything as flawless as possible.
---

With the desktop PC in place, the next step was to rethink my software infrastructure. That meant reviewing the way I work and watch media content at home to choose the right software to make everything as flawless as possible.

#### Operating System

The primary operating system was easy enough to choose. I’ve been using Windows 10 for almost three years now, and the overall experience has been positive. I like the user interface, and it's easy enough to customize. The amount of available software makes it very difficult to miss anything that might only be available on other operating systems. It's still the best gaming platform, and that was always one of the intended uses for the computer.

Unfortunately, one of my major grievances with Windows is what makes it virtually unusable as a native work machine: the Windows Subsystem for Linux (WSL). At the time of its announcement, I was excited about the possibility of having a fully-fledged Linux shell to work on, but the performance was atrocious, and many bugs made it almost impossible to use as a stable development environment. As time went by, it became increasingly stable, but the overall performance never improved dramatically. The other issue is that the filesystem used by the WSL is separate from the Windows filesystem. Yes, you can access the files in the WSL filesystem through Windows apps (e.g., Explorer, Visual Studio Code, etc.), but any changes made with these apps can lead to file corruption. The recommended approach is to store development files in the Windows filesystem and use the WSL to run development software, but it quickly becomes cumbersome. For instance, if I configure my Python environment in the WSL and use it to maintain dependencies for a project stored in the Windows filesystem, an editor like Visual Studio Code won’t be able to detect any installed packages. The most straightforward way (if you can call it that) to circumvent this is to have a sort of mirror configuration in the Windows filesystem, which is tricky to maintain, especially when you’re quickly iterating through different dependencies on experimental projects.

Another issue I have is with the amount of telemetry data that the operating system tries to collect. Even if you disable all the options related to data collection, you’re never truly able to disable everything, and installing major system updates resets all these options. This topic is quite disappointing, but not a blocker and, unfortunately, commonplace in proprietary operating systems like Windows and macOS. And let’s not forget the amount of pre-installed bloatware. A fresh install of Windows 10 shouldn’t include Minecraft, Deezer Music, Flipboard, Fitbit Coach, Music Maker Jam, Candy Crush Saga, Candy Crush Friends Saga, and Disney Magic Kingdoms.

#### Virtualizing Like a Boss

For work purposes, and given my gripes with WSL, there was no question that the best approach would be to use virtual machines. I played around with Microsoft’s Hyper-V to run and manage virtual machines, but the graphical performance was subpar. Without any additional drivers available (like VirtualBox Guest Extensions and VMWare Tools), I couldn’t possibly move forward with this setup to run different Linux distros. VMWare ended up coming on top for a few reasons:

* Better graphical performance
* Superior integration with the host operating system in terms of file sharing, clipboard management and installation of additional drivers

I haven’t discarded VirtualBox entirely because I might need a VM with macOS and the above lists macOS as a compatible operating system for virtualization out of the box, unlike VMWare that requires a third-party patch. I considered getting a second-hand Mac for this specific purpose, but the cost is prohibitive.

Ubuntu 18.10 turned out to be a pleasant surprise. The performance is excellent in a virtualized environment. Unfortunately, stability comes at the price of dependencies that are not updated fast enough like on rolling release systems based on Arch. I'm currently trying out Manjaro and seriously considering a switch sooner rather than later. More to follow on this topic.

#### Enter the Microsoft Age

After leaving my previous company, I became increasingly detached from the Apple ecosystem. I still have my iPhone and won’t move back to the Android world anytime soon, but I dropped my Apple Music subscription and haven’t missed it. I also don't miss macOS as my daily OS, as Linux gives me everything I need to go about my business. I do use macOS at my current company and tend to fall back to the household MacBook Air when going through official work stuff at home due to a development environment that is tightly coupled with the OS. 

From a services perspective, I slowly but steadily started entering the Microsoft ecosystem. The integration between Windows 10 and the Xbox One X is very user-friendly and quite handy, especially with the ability to stream from the console to the PC when the TV needs to be used for other multimedia purposes while someone is gaming. And, of course, Xbox Live Gold and Game Pass are a must have if you're serious about gaming.

Backups also played an essential role in this shift towards Microsoft. I was looking for an online backup solution that would integrate seamlessly with Windows and signing up for an Office 365 account was a no brainer. I've been using OneDrive to back up all my essential data for a few months now and haven't looked back since.

#### Additional Changes?

There are some changes lined up for the near future, but those will likely involve buying additional hardware for the PC, so budgetary constraints will play a vital role in anything I decide to do.
