---
layout: page
title: About Me
show-avatar: false
css:
  - "/assets/css/aboutme.css"
---

<div class="aboutme-profile-card">
  <div class="aboutme-photo-wrap">
    <img src="/assets/img/me.jpeg" alt="Zhijing Xin portrait" class="aboutme-photo">
  </div>
  <div class="aboutme-profile-meta">
    <h2>Zhijing Xin</h2>
    <p class="aboutme-role">PhD Student at USTC (since 2026)</p>
    <div class="aboutme-contacts" aria-label="Contact links">
      <a class="aboutme-contact-item" href="mailto:zhijingxin05@gmail.com" aria-label="Email">
        <img src="/assets/img/EMAIL.svg" alt="" />
        <span>Email</span>
      </a>
      <a class="aboutme-contact-item" href="https://www.zhihu.com/people/qing-rao-94-11" target="_blank" rel="noopener noreferrer" aria-label="Zhihu">
        <img src="/assets/img/知乎.svg" alt="" />
        <span>Zhihu</span>
      </a>
      <a class="aboutme-contact-item" href="https://github.com/Xiaojingkuaipao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img src="/assets/img/github.svg" alt="" />
        <span>GitHub</span>
      </a>
      <a class="aboutme-contact-item" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <img src="/assets/img/linkedin.svg" alt="" />
        <span>LinkedIn</span>
      </a>
    </div>
    <p>
      <strong>Lab:</strong> <a href="https://int-ustc.github.io/index.html">USTC Intelligent Network and System Group</a><br>
      <strong>Advisors:</strong>
      <a href="https://faculty.ustc.edu.cn/xuhongli1/zh_CN/index.htm">Prof. Hongli Xu</a>,
      <a href="https://faculty.ustc.edu.cn/zhaogongming/zh_CN/index.htm">Prof. Gongming Zhao</a>
    </p>
  </div>
</div>

## About

I am an early-career computer researcher currently focused on AI infrastructure and ML systems. My recent work explores communication and systems optimization for large-scale model training, especially EP parallel all-to-all scheduling in MoE workloads. During my undergraduate years, I built strong foundations in computer vision and few-shot learning, and I still enjoy bridging algorithmic ideas with practical engineering. I value both technical depth and clear expression, and I am motivated by building systems that are efficient, scalable, and useful in real-world environments. Going forward, I plan to continue advancing research at USTC in AI Infra and ML Systems.

## Education

- **University of Science and Technology of China (USTC)**, Anhui, China  
  PhD Student, Computer Science (since 2026)
- **Chongqing University**, Chongqing, China  
  B.Eng. in Computer Science and Technology (2022-2026)

## Research Interests

- AI Infrastructure
- ML Systems
- GPU Collective Communication
- High-Performance Operators
- Inference Acceleration
- Computer Vision
- Few-Shot Learning

## Projects

### 1) Design and Implementation of EP-Parallel All-to-All Communication Load Balancing Optimization

- **Role:** Main Contributor
- **Time:** 2025.10-present
- **Problem:** Existing MoE all-to-all methods often trade off between aggregation and dynamic load balancing, causing traffic inflation or poor adaptation to dynamic token-level demands.
- **Method:** Proposed an online scheduling algorithm with token-level communication modeling, along with an approximation-optimal strategy and approximation-ratio analysis.
- **Contribution:** Conducted paper survey, participated in mathematical modeling, proposed and refined the scheduling algorithm, and implemented simulation code.
- **Outcome:** Simulation shows about 10%-60% improvement over baselines; testbed experiments are in progress.

### 2) Defect Detection System for Industrial Product Images Using Vision Foundation Models

- **Role:** Core Team Member
- **Time:** 2024.11-present
- **Problem:** Generic feature extractors often underperform in industrial defect scenarios.
- **Method:** Built a DINOv2 + Swin-based feature extractor pipeline, integrated large-scale industrial datasets with unified annotation format, and introduced FPN-based multi-scale interaction and deformable attention in the PL module.
- **Contribution:** Designed the improved PL module, fine-tuned DINOv2 and Swin-T, and implemented the end-to-end pipeline.
- **Outcome:** One patent submitted: _A Few-Shot Industrial Defect Detection Method Based on Industrial Vision Foundation Models_.

### 3) Domain-Fusion Road Damage Detection System

- **Role:** Project Lead
- **Time:** 2023.2-2023.5
- **Problem:** High annotation cost and significant domain gap between source and target road datasets.
- **Method:** Used labeled RDD2020 as source domain and built 5000+ unlabeled target-domain road images; improved YOLOv5 with MK-MMD-based domain adaptation and adaptive illumination enhancement.
- **Contribution:** Designed and implemented the MK-MMD domain-fusion algorithm, and led technical investigation for object detection methods.
- **Outcome:** Achieved effective annotation and adaptation on 5000+ target images.  
  Project: <https://github.com/Xiaojingkuaipao/yolov5-domain-adaptation>

## Publications

- **Under Submission / In Progress:** EP-parallel all-to-all communication load balancing optimization for MoE training systems (manuscript in preparation).
- **Patent Submission:** _A Few-Shot Industrial Defect Detection Method Based on Industrial Vision Foundation Models_.

## Awards

- National Scholarship (2023)
- Xiaomi Scholarship (2024)
- National Encouragement Scholarship (2025)
- Outstanding Graduate, Chongqing University (2025)
- Outstanding Student, Chongqing University (2023-2024)

## Skills

**Programming Languages:** C++, Python, Matlab, JavaScript, HTML, CSS  
**Frameworks and Tools:** CUDA, PyTorch, Git, Vue, OpenCV

## Interests

- 🎤Singing
- 🏓Table Tennis
- 🎸Guitar
- ✈️Traveling
- 🎵Music
- 🎮PC Games

## Future Direction

I aim to continue exploring AI infrastructure and ML systems at USTC, with a long-term focus on efficient communication, scalable training systems, and practical deployment for large models.
