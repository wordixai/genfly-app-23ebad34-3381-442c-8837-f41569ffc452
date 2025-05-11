import { BrainCircuit, Users, Lightbulb, FileImage, Handshake } from 'lucide-react';

const Index = () => {
  return (
    <div className="w-[1280px] h-[720px] bg-gradient-to-br from-blue-600 to-blue-800 p-16 flex flex-col">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">团队经历复盘</h1>
        <p className="text-2xl text-blue-100">AI产品GTM材料制作</p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-8 flex-grow">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Users className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">任务背景</h2>
            </div>
            <p className="text-gray-700">
              下半年市场活动准备前期，为AI制课、AI测评、AI学习地图和AI对练等产品提供GTM材料，
              提炼产品价值亮点，制作宣传海报，助力前线人员向客户传达产品价值。
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Handshake className="text-blue-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">协作方式</h2>
            </div>
            <p className="text-gray-700">
              在线协作：每个产品经理负责自身产品价值输出，梳理文档。
              讲师除完成自己部分，还协助他人撰写与修改稿件。
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-yellow-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">面临挑战</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>团队成员对产品价值理解和表述差异大</li>
              <li>市场上AI产品竞争激烈，精准提炼独特亮点困难</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-lg border-l-4 border-green-400">
            <div className="flex items-center mb-4">
              <BrainCircuit className="text-green-600 mr-3" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">应对措施</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>团队成员反复沟通交流</li>
              <li>深入分析产品特点与市场需求</li>
            </ul>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-lg flex items-start">
            <FileImage className="text-blue-600 mr-4 mt-1" size={28} />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">最终成果</h2>
              <p className="text-gray-700">
                成功提炼亮点并制作海报。海报虽设计不精美，但能准确传递价值，
                在前线广泛应用，提升客户对产品的了解与兴趣。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-blue-100 text-sm">
        AI产品团队 · {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Index;